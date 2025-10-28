import { reactive } from "vue";
import { ScoketUrl } from "/src/config";

// 状态管理
export const state = reactive({
  socketIO: null, // WebSocket 实例
  isConnected: false, // 连接状态
  receivedData: [], // 接收到的阶段数据
});

export const methods = {
  // 初始化 WebSocket 连接
  initSocket: () => {
    if (state.socketIO) return; // 如果已经初始化，则不重复初始化

    // 创建 WebSocket 连接
    state.socketIO = new WebSocket(ScoketUrl);

    // 监听连接成功
    state.socketIO.onopen = () => {
      console.log("Connected to WebSocket");
      state.isConnected = true;
    };

    // 监听服务器发送的数据
    state.socketIO.onmessage = (event) => {
      const data = JSON.parse(event.data); // 解析后端发送的数据
      console.log("Received data:", data);
      state.receivedData.push(data); // 保存接收到的数据
    };

    // 监听连接关闭
    state.socketIO.onclose = () => {
      console.log("WebSocket connection closed");
      state.isConnected = false;
      state.socketIO = null;
    };

    // 监听错误
    state.socketIO.onerror = (error) => {
      console.error("WebSocket error:", error);
    };
  },

  // 发送消息到服务器
  sendMessage: (message) => {
    if (state.socketIO && state.isConnected) {
      state.socketIO.send(JSON.stringify(message));
      console.log("Message sent:", message);
    } else {
      console.error("WebSocket is not connected.");
    }
  },

  // 手动关闭 WebSocket 连接
  closeSocket: () => {
    if (state.socketIO) {
      state.socketIO.close();
      console.log("WebSocket connection closed manually");
    }
  },
};

export default { state, methods };
