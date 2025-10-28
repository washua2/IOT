<!-- AlarmStream.vue -->
<template>
  <section class="wrap">
    <header class="bar">
      <h2>实时警报</h2>
      <span class="status" :data-ok="connected">{{ statusText }}</span>
      <button class="btn" @click="reconnect">重连</button>
    </header>

    <div class="info">
      <p>订阅地址：<code>{{ url }}</code></p>
      <p>已连接客户端：<strong v-if="connected">是</strong><strong v-else>否</strong></p>
    </div>

    <ul class="list">
      <li v-for="(item, idx) in logs" :key="idx" class="card">
        <div class="meta">
          <strong>{{ item.type }}</strong>
          <time>{{ item.at }}</time>
        </div>
        <pre>{{ pretty(item.data) }}</pre>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watchEffect ,inject} from 'vue'
const {AlertStore} = inject('store')
const props = defineProps({
  // 你的 SSE 服务地址
  url: { type: String, default: 'http://localhost:8089/events' },
})

const statusText = ref('连接中…')
const connected = ref(false)
const logs = ref([])

let es /** @type {EventSource | null} */ = null

function pretty(v) {
  try { return JSON.stringify(v, null, 2) } catch { return String(v) }
}

function pushLog(type, data) {
  console.log(type, data)
  AlertStore.methods.setVASAlert()
  logs.value.unshift({ type, data, at: new Date().toISOString() })
}

function bindEventSource(instance) {
  instance.addEventListener('connected', (e) => {
    connected.value = true
    statusText.value = 'SSE 已连接'
    pushLog('connected', JSON.parse(e.data || '{"ok":true}'))
  })

  instance.addEventListener('ping', (e) => {
    // 心跳可不展示，如需查看可取消注释
    // pushLog('ping', e.data)
  })

  instance.addEventListener('alarm', (e) => {
    let data = e.data
    try { data = JSON.parse(e.data) } catch {}
    pushLog('alarm', data)
    // 这里可以触发声音/弹窗等
  })

  instance.onerror = (err) => {
    connected.value = false
    statusText.value = '连接出错，重试中…'
    pushLog('error', 'EventSource error')
    // 交给浏览器内置的重连策略，或自行实现指数退避
  }

  instance.onopen = () => {
    connected.value = true
    statusText.value = 'SSE 已连接'
  }
}

function connect() {
  close() // 保守：先关闭旧连接
  es = new EventSource(props.url) // 如需 Cookie，传 { withCredentials: true }
  bindEventSource(es)
}

function close() {
  if (es) {
    es.close()
    es = null
  }
}

function reconnect() {
  statusText.value = '重连中…'
  connected.value = false
  connect()
}

onMounted(connect)
onBeforeUnmount(close)

// 可在 props.url 变化时自动重连
watchEffect((onInvalidate) => {
  const currentUrl = props.url
  onInvalidate(() => {
    // 当依赖失效（url 变化）时，重连
    reconnect()
  })
})
</script>

<style scoped>
.wrap { max-width: 900px; margin: 24px auto; padding: 16px; font-family: ui-sans-serif, system-ui, -apple-system; }
.bar { display: flex; align-items: center; gap: 12px; }
.bar h2 { margin: 0; }
.status { font-size: 14px; padding: 4px 8px; border-radius: 999px; background: #f0f3f7; }
.status[data-ok="true"] { background: #e8fff1; }
.btn { margin-left: auto; padding: 6px 12px; border: 0; border-radius: 10px; cursor: pointer; background: #111827; color: #fff; }
.info { margin: 12px 0 8px; color: #4b5563; font-size: 14px; }
.list { list-style: none; padding: 0; display: grid; gap: 12px; }
.card { border: 1px solid #e5e7eb; border-radius: 12px; padding: 12px; background: #fff; }
.meta { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 8px; }
pre { margin: 0; white-space: pre-wrap; word-break: break-word; background: #f8fafc; padding: 10px; border-radius: 8px; }
code { background: #f3f4f6; padding: 2px 6px; border-radius: 6px; }
</style>
