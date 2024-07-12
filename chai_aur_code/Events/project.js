const cont= document.querySelector('.cont');
const card= document.querySelector('.card');
let counter=0;


card.addEventListener("click",()=>{
    const newCard= document.createElement('div')
    newCard.classList.add('card')
    newCard.innerHTML= ++counter;
    cont.appendChild(newCard)


})