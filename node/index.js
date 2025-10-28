// server.js
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

/** 维护所有 SSE 客户端连接 */
const clients = new Set();

/** SSE 事件流：前端用 EventSource 连接这里 */
app.get("/events", (req, res) => {
  // 必要的 SSE 头
  res.setHeader("Content-Type", "text/event-stream; charset=utf-8");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");
  // 若要跨域可配合 cors()；若有代理/网关，按需设置 flushHeaders
  res.flushHeaders?.();

  // 先告知已连接
  res.write(`event: connected\ndata: ${JSON.stringify({ ok: true })}\n\n`);

  // 心跳，防止中间层超时断开（30s 一次）
  const ping = setInterval(() => {
    res.write(`event: ping\ndata: ${Date.now()}\n\n`);
  }, 30000);

  // 保存客户端
  clients.add(res);

  req.on("close", () => {
    clearInterval(ping);
    clients.delete(res);
  });
});

/** 触发通知：GET /notify?alarm=&name=&location= */
app.get("/notify", (req, res) => {
  const { alarm = "", name = "", location = "" } = req.query;

  // 简单校验
  if (!alarm || !name || !location) {
    return res.status(400).json({
      ok: false,
      msg: "缺少必要参数：alarm、name、location 都必须提供",
      example: "/notify?alarm=Motion%20Detected&name=CamA&location=Gate1",
    });
  }

  // 要广播给前端的消息体
  const payload = {
    alarm: String(alarm),
    name: String(name),
    location: String(location),
    ts: new Date().toISOString(),
  };

  // 广播（SSE 格式：event + data + 空行）
  for (const client of clients) {
    client.write(`event: alarm\ndata: ${JSON.stringify(payload)}\n\n`);
  }

  return res.json({ ok: true, delivered: clients.size, payload });
});

const PORT = process.env.PORT || 8089;
app.listen(PORT, () => {
  console.log(`SSE server listening on http://localhost:${PORT}`);
});
