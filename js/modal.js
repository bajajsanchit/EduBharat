var modal = document.getElementById('modal');
var enrollBtn = document.getElementById('enroll-btn')
var closeBtn = document.getElementById('close-btn')


function openModal(){
    modal.classList.toggle('is-active')
}

function closeModal(){
    modal.classList.toggle('is-active')
}

enrollBtn.addEventListener('click', openModal)
closeBtn.addEventListener('click', closeModal)
