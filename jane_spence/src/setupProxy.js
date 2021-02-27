const { createProxyMiddleware } = require('http-proxy-middleware');

// creates a proxy to our backend, allows us to connect front-end to back-end
module.exports = function(app) {

    app.use(createProxyMiddleware("/api", {target: "http://localhost:5000"}))
    app.listen(3000);
}