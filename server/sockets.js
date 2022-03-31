const { uid } = require("uid")
const { teams, chapters } = require('./data')


// player creates a new game and is added to that room
const startGame = (io, socket, rooms) => {
    // new room created with 5 digit uid
    let newroom = uid(5).toUpperCase()
    // player added to room
    socket.join(newroom)
    console.log(`player joined room ${newroom}`)
    // room is added to rooms object with empty teams object
    rooms[newroom] = {teams: {...teams}, players: [socket.id]}
    // player is sent list of teams in room which is currently empty
    socket.emit('game_joined', {teams: rooms[newroom].teams, room: newroom})
}


// player joins existing game using uid
const joinGame = (io, socket, rooms, data) => {
    // rooms object is parsed to locate room
    if (Object.keys(rooms).includes(data.room)) {
        // player list checked for max lenghth
        if (rooms[data.room].players.length < 2) {
            // player added to room
            socket.join(data.room)
            console.log(`player joined room ${data.room}`)
            // player added to room player list
            rooms[data.room].players.push(socket.id)
            socket.emit('game_joined', {teams: rooms[data.room].teams, room: data.room})
        } else {
            // error message for maximum player count
            socket.emit('error', {message: 'Unnable to join room. Max player count reached.'})
        }
    } else {
        // error message for nonexistent room
        socket.emit('error', {message: 'Unnable to join room. Please check that you have the correct code.'})
    }
}

const selectTeam = (io, socket, rooms, data) => {
    rooms[data.room].teams[data.team] = data.name
    io.to(data.room).emit('game_teams', rooms[data.room])
}

const selectChapter = (io, socket, rooms, data) => {
    rooms[data.room].chapter = data.chapter
    rooms[data.room].units = {...chapters[data.chapter]}
    io.to(data.room).emit('game_data', rooms[data.room], )
}

module.exports = {
    startGame,
    joinGame,
    selectTeam,
    selectChapter
}