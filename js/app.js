import '../node_modules/socket.io/client-dist/socket.io.js'

const socket = io()

const form = document.getElementById('form')
const champ = document.getElementById('champ')
const ul = document.getElementById('messages')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (champ.value === "") return
    send(champ.value, "ENZO LE PLUS BEAU")
})

function send(msg, user) {
    socket.emit('chat message', msg, user)
}

socket.on('chat message', (msg, user) => {
    add(msg, user)
})


function add(msg, user) {
    const width = 8 * msg.length > 300 ? 300 : 8 * msg.length

    const inner = `
    <div class='container-message'>
        <p class='username';'>${user} :</p>
        <div class='message-div-you' style='width: ${width}px'>
            <p class='message-value'>${msg}</p>
        </div>
    </div>
    `

    ul.innerHTML += inner

}

add("test for test .container-message .container-message .container-message .container-message", "ENZO LE PLUS BEAU")
add("test for test .container-message .container-message", "ENZO LE PLUS BEAU")