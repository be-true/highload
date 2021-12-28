const http = require("http");

const server = http.createServer().listen(3000);

server.addListener("request", (req, res) => {
    res.write("Hello world ");
    res.write(req.url);
    res.end();
})