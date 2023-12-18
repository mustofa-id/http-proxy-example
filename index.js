import HttpProxy from "http-proxy";

const PORT = 8080;
const TARGET = `https://api-satusehat-dev.dto.kemkes.go.id`;

const server = HttpProxy.createProxyServer({
  target: TARGET,
  changeOrigin: true,
}).listen(PORT);

console.log("Listening on", PORT);

server.on("error", (e) => {
  console.error("Error: ", e.message);
});
