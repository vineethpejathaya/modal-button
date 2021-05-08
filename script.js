const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

const btnCloseModal = document.querySelector(".close-modal");
const btnShowModal= document.querySelectorAll(".show-modal");


function showModal(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

function closeModal(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for(let i=0; i<btnShowModal.length; i++)
{
    btnShowModal[i].addEventListener('click',showModal)
}

btnCloseModal.addEventListener('click',closeModal);
overlay.addEventListener('click',closeModal)