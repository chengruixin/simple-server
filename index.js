const http = require('http')

const port = 80

const server = http.createServer((req, res) => {
    console.log("Receive...");
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello World!\n')
})

server.listen(port, () => {
    console.log('Listening on port ' + port)
})