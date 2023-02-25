const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = function(app) {
//     app.use(
//         '/api',
//         createProxyMiddleware({
//             target: 'http://127.0.0.1:5000',
//             changeOrigin: true
//         })
//     );
// };

module.exports = function(app) {
    try{
        app.use(
            '/api',
            createProxyMiddleware({
                target: 'http://localhost:5000',
                changeOrigin: true
            })
        )
    }
    catch(err){
        console.log(err.message);
    }
}

