import io from "../node_modules/socket.io/client-dist/socket.io.js";
const socket = io()
const form = document.getElementById('form')
const champ = document.getElementById('m')

const send = (text) => {
    socket.emit('chat message', text)
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    send(champ.value)
    console.log(true);
})