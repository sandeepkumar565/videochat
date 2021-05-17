const express = require("express");
const http = require("http");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = require("socket.io")(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

app.use(cors());

const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.send('Server Is Running...');
});

server.listen(PORT, () => console.log('Server is running on port ' + PORT));