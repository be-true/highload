const http = require("http");

const server = http.createServer().listen(3000);

server.addListener("request", (req, res) => {
    console.log(req.url, new Date);
    res.write("Hello world ");
    res.write(req.url);
    res.end();
})