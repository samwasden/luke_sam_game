const express = require('express')
const cors = require('cors');
const path = require('path')
const http = require('http');
const { startGame, joinGame, selectTeam, selectChapter } = require('./sockets');
const PORT = process.env.PORT || 4000
const app = express()
const server = http.createServer(app)
const io = require('socket.io') (server, {
    cors: {
      origin: "*",
      methods: "*"
    }
  });

app.use(cors({
    origin: '*'
}));

app.get("/api/", (req, res) => {
    res.json({ message: "Hello from server!" });
});

server.listen(PORT, () => console.log(`listening on port ${PORT}.`))

let rooms = {}
  
io.on('connection', socket => {
    console.log('player connected')

    socket.on("start_game", () => {
        startGame(io, socket, rooms)
    });

    socket.on("join_game", (data) => {
        joinGame(io, socket, rooms, data)
    });

    socket.on("select_team", (data) => {
        selectTeam(io, socket, rooms, data)
    });

    socket.on("select_chapter", data => {
        selectChapter(io, socket, rooms, data)
    });

    socket.on("disconnect", reason => {
        
    });
})