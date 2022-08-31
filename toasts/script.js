let messageToast = document.getElementById('message-content');
let addToastButton = document.getElementById('add-button');
let clearToastsButton = document.getElementById("clear-button");
let cancelable = document.getElementById('cancelable').value;
let toastsContainer = document.getElementById('toasts');
let cancelToast = document.getElementsByClassName('cancel-button');
const baseClass = 'toast'
const successClassname = 'success-toast';
const errorClassname = 'error-toast';


function createToasts () {
    let newdiv = document.createElement('div');
    let message = document.createElement('p');
    let duration = document.getElementById('duration').value;
    let cancelButton = document.createElement('button');
    newdiv.classList.add(baseClass);
    message.classList.add('message');
    cancelButton.classList.add('cancel-button');
    if(document.getElementById('cancelable').checked){
        cancelButton.innerText = 'X';
        cancelButton.addEventListener('click', deleteToast)
    }
    newdiv.appendChild(message);
    newdiv.appendChild(cancelButton);
    if(document.getElementById('success').checked){
        newdiv.classList.add(successClassname)
    } else {newdiv.classList.add(errorClassname)}
    if(messageToast.value.trim()) {
        message.innerHTML = messageToast.value;
    } else if (newdiv.className.includes('success')) {
        message.innerHTML = 'success';
    } else { message.innerHTML = 'error'; }
   if(duration){
    newdiv.setAttribute('duration', duration);
   } else {newdiv.setAttribute('duration', 500);}    

    return newdiv;
}

function timeOut () {

    let toasts = document.getElementsByClassName('toast');
    if(toasts.length) {
        Array.from(toasts).forEach(element => { 
            let duration = element.getAttribute('duration');
            let time = parseInt(duration);
            function remove () { element.remove()};
            setTimeout (remove, time)
        });        
    }
}

function clearToasts () {
    toastsContainer.innerHTML = null;
}

function addToast() {  
    toastsContainer.appendChild(createToasts());  
    timeOut(); 
};

function deleteToast (e) {
    e.target.closest('div').remove();
}



addToastButton.addEventListener("click", addToast);
clearToastsButton.addEventListener("click", clearToasts);