import App from "express";
const app = App()
import * as http from 'http';
import path from "path";
const Http = http.createServer(app)
import Io from "./node_modules/socket.io/client-dist/socket.io.js";
const io = Io()

app.get('/', (req, res) => {
    res.sendFile(path.dirname(`${process.cwd()}/index.html`))
})

app.use(App.static(process.cwd()))


io.on('connection', (socket) => {
    console.log('a user is connected');
    socket.on('disconnected', () => {
        console.log('a user is disconnected');
    })
    socket.on('chat message', (msg) => {
        console.log(`new message ${msg}`);
    })
})

Http.listen(3000, () => {
    console.log('Server running on 3000');
})