export const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app: any) {
  app.use(
    createProxyMiddleware("/api/v1", {
      target: "http://15.164.152.33:8080",
      changeOrigin: true,
    })
  );
};
