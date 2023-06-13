const { createProxyMiddleware } = require("http-proxy-middleware");
// const HttpsProxyAgent = require("https-proxy-agent");

module.exports = function (app) {
	app.use(
		"/api",
		createProxyMiddleware({
			target: "http://localhost:5000",
			changeOrigin: true,
			secure: false,
			//agent: new HttpsProxyAgent('http://127.0.0.1:8888')
			headers: {
				Connection: "keep-alive",
			},
		})
	);
};
