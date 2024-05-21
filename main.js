// 


let sendBtn = document.querySelector('.send-btn');
let forSend = document.getElementById('for-send');
let inputText = document.getElementById('input-text');

inputText.value = ''
forSend.innerHTML = ''

var petReceive = document.getElementById('pet-receive');

petReceive.innerHTML = ''

sendBtn.addEventListener('click', () => {
if(inputText.value === ''){
    alert('please enter a message')
}else {
    alert ('send message to Peter')
    forSend.innerHTML = inputText.value
    forSend.style = `
    background: blue;
    color:white;
    padding:10px;
    width: fit-content;
    `
}
    
petReceive.innerHTML = inputText.value

petReceive.innerHTML = inputText.value
petReceive.style = `
background: white;
color:black;
padding:10px;
width: fit-content;
box-shadow: 10 10 5px #1f242d;
`

});