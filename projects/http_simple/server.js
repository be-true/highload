const http = require("http");

const port = 80;
const hostname = "127.0.0.1";
const server = http.createServer().listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

server.addListener("request", (req, res) => {
    console.log(req.url, new Date);
    res.write("Hello world ");
    res.write(req.url);
    res.end();
})