const button= document.querySelector('button')
const popup= document.querySelector('.popup')
const close= document.querySelector('.close-icon')
const body=document.querySelector('body')

button.addEventListener("click",()=>{
    popup.classList.add('open')
    body.style.backgroundColor= 'rgba(0,0,0,0.2)'

})

close.addEventListener("click",()=>{
    popup.classList.remove('open')
    body.style.backgroundColor= '#decdac'
})

