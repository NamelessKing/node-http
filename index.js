const http = require("http");

const hostname = "localhost";
const port = 3000;

const server = http.createServer((req, res) => {
    console.log(req.headers);
    
    res.statusCode = 200;
    res.setHeader('Conten-Type', 'test/html');
    res.end('<html><body><h1>hello world!</h1></body></html>');
});

server.listen(port, hostname, () => { 
    console.log(`Server running at http://${hostname}:${port}`);
});