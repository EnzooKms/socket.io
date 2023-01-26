import '../node_modules/socket.io/client-dist/socket.io.js' // yes

const socket = io()
let User = ''

register(socket)

const form = document.getElementById('form')
const champ = document.getElementById('champ')
const ul = document.getElementById('messages')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (champ.value === "") return
    console.log(User);
    send(champ.value, User)
})

function send(msg, user) {
    socket.emit('chat message', msg, user)
}

socket.on('chat message', (msg, user) => {
    add(msg, user)
})


function add(msg, user) {
    const width = 8 * msg.length > 300 ? 300 : 8 * msg.length
    const ThisUser = user === User ? "you" : "other"

    const inner = `
    <div class='container-message-${ThisUser}'>
        <p class='username';'>${user} :</p>
        <div class='message-div-${ThisUser}' style='width: ${width}px'>
            <p class='message-value'>${msg}</p>
        </div>
    </div>
    `

    ul.innerHTML += inner

}

async function register(socket) {
    const form = document.getElementById('form-register')
    const champ = document.getElementById('champ-register')
    const container_register = document.getElementById('container-register')
    const container = document.getElementById('container')

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        if (champ.value !== "") {
            User = champ.value
            container_register.style.display = 'none'
            container.style.display = 'block'
        }
    })
}