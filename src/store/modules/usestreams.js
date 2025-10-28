import { ref, computed } from 'vue'

// 引入常量（示例：WebRTC 与 Local 两种来源）
import {
  ALERT_PALYBACK_WEBRTC,
  ALAHLISAUDIFCFANSECTION_WEBRTC,
  KAWASAKIFRONTALEFANSECTION_WEBRTC,
  ENVIRONMENTAL_VIDEO_MAX_WEBRTC,
  ENVIRONMENTAL_VIDEO_WEBRTC,
  SECURITY_CCTV_WEBRTC,
  SECURITY_CCTV_MAX_WEBRTC,
  SECURITY_CCTV_UPDATE_WEBRTC,
  SECURITY_CCTV_UPDATE_MAX_WEBRTC,
  TEAM_CCTV_WEBRTC,
  SYSTEM_WEBRTC,
  ALERT_PALYBACK_LOCAL,
  ALAHLISAUDIFCFANSECTION_LOCAL,
  KAWASAKIFRONTALEFANSECTION_LOCAL,
  ENVIRONMENTAL_VIDEO_MAX_LOCAL,
  ENVIRONMENTAL_VIDEO_LOCAL,
  SECURITY_CCTV_LOCAL,
  SECURITY_CCTV_MAX_LOCAL,
  SECURITY_CCTV_UPDATE_LOCAL,
  SECURITY_CCTV_UPDATE_MAX_LOCAL,
  TEAM_CCTV_LOCAL,
  SYSTEM_LOCAL,
} from '/public/constants/url.js'

// 当前模式（从 sessionStorage 恢复）
const mode = ref(sessionStorage.getItem('isHttp') === 'true' ? 'webrtc' : 'local')

/**
 * useStreams — 组合式函数
 * 提供流模式切换与自动选择不同的流常量
 */
export function useStreams() {
  // 切换模式函数
  const setMode = (m) => {
    mode.value = m
    sessionStorage.setItem('isHttp', String(m === 'webrtc'))
  }

  // 根据模式选择不同流
  const ALERT_PALYBACK = computed(() =>
    mode.value === 'webrtc' ? ALERT_PALYBACK_WEBRTC : ALERT_PALYBACK_LOCAL
  )
  const ALAHLISAUDIFCFANSECTION = computed(() =>
    mode.value === 'webrtc' ? ALAHLISAUDIFCFANSECTION_WEBRTC : ALAHLISAUDIFCFANSECTION_LOCAL
  )
  const KAWASAKIFRONTALEFANSECTION = computed(() =>
    mode.value === 'webrtc' ? KAWASAKIFRONTALEFANSECTION_WEBRTC : KAWASAKIFRONTALEFANSECTION_LOCAL
  )
  const ENVIRONMENTAL_VIDEO_MAX = computed(() =>
    mode.value === 'webrtc' ? ENVIRONMENTAL_VIDEO_MAX_WEBRTC : ENVIRONMENTAL_VIDEO_MAX_LOCAL
  )
  const ENVIRONMENTAL_VIDEO = computed(() =>
    mode.value === 'webrtc' ? ENVIRONMENTAL_VIDEO_WEBRTC : ENVIRONMENTAL_VIDEO_LOCAL
  )

  const SECURITY_CCTV = computed(() =>
    mode.value === 'webrtc' ? SECURITY_CCTV_WEBRTC : SECURITY_CCTV_LOCAL
  )

  const SECURITY_CCTV_MAX = computed(() =>
    mode.value === 'webrtc' ? SECURITY_CCTV_MAX_WEBRTC : SECURITY_CCTV_MAX_LOCAL
  )

  const SECURITY_CCTV_UPDATE = computed(() =>
    mode.value === 'webrtc' ? SECURITY_CCTV_UPDATE_WEBRTC : SECURITY_CCTV_UPDATE_LOCAL
  )

  const SECURITY_CCTV_UPDATE_MAX = computed(() =>
    mode.value === 'webrtc'
      ? SECURITY_CCTV_UPDATE_MAX_WEBRTC
      : SECURITY_CCTV_UPDATE_MAX_LOCAL
  )

  const TEAM_CCTV = computed(() =>
    mode.value === 'webrtc' ? TEAM_CCTV_WEBRTC : TEAM_CCTV_LOCAL
  )

  const SYSTEM = computed(() =>
    mode.value === 'webrtc' ? SYSTEM_WEBRTC : SYSTEM_LOCAL
  )

  return {
    mode,
    setMode,
    ALERT_PALYBACK,
    ALAHLISAUDIFCFANSECTION,
    KAWASAKIFRONTALEFANSECTION,
    ENVIRONMENTAL_VIDEO_MAX,
    ENVIRONMENTAL_VIDEO,
    SECURITY_CCTV,
    SECURITY_CCTV_MAX,
    SECURITY_CCTV_UPDATE,
    SECURITY_CCTV_UPDATE_MAX,
    TEAM_CCTV,
    SYSTEM,
  }
}
