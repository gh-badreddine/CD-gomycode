const http = require('http')
const PORT = process.env.PORT || 8080
http
  .createServer((req, res) => {
    res.end('Hello GOMYCODE v1.1');
  })
  .listen(PORT, () => console.log('Listening on', PORT))
