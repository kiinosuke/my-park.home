'use-stict';

const menu = document.getElementById('menu-icon');
const mask = document.getElementById('mask');
const hidden = document.querySelector('hidden');
const modal = document.getElementById('modal');
const close = document.getElementById('close-icon');
const img = document.querySelector('img');

menu.classList.remove('hidden');
mask.classList.add('hidden');
modal.classList.add('hidden');

function setIcon(){
    menu.addEventListener('click',()=>{
    menu.classList.add('hidden');
    mask.classList.remove('hidden');
    modal.classList.remove('hidden');
    close.classList.remove('hidden');
});

close.addEventListener('click',()=>{
    menu.classList.remove('hidden');
    mask.classList.add('hidden');
    modal.classList.add('hidden');
    close.classList.add('hidden');
});
}

setIcon();
