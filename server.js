const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const port = 3000

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
})

app.use(express.static(process.cwd()))

io.on('connection', (socket) => {
    console.log('a user is connected');

    socket.on('disconnect', () => {
        console.log('a user is disconnected');
    })

    socket.on('chat message', (msg, user) => {
        console.log(`message reçu ${msg} de ${user}`);
        io.emit('chat message', msg, user)
    })

})

http.listen(port, () => {
    console.log(`Server running on ${port}`);
})