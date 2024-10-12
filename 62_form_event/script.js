const usernameInput = document.querySelector("#username");
const paragraph = document.querySelector("p");

// usernameInput.addEventListener('dbclick',()=>{
//     console.log('input clicked');
// })

let inputValue;
// -
// -> INPUT EVENT
// usernameInput.addEventListener('input',(event)=>{
//     console.log(event.type)
//     inputValue= event.target.value
//     paragraph.innerText= event.target.value
// })

// -> CHANGE EVENT
// usernameInput.addEventListener('input',(event)=>{
//     console.log(event.type)
//     inputValue= event.target.value
//     paragraph.innerText= event.target.value
// })

// -> FOCUS EVENT
// usernameInput.addEventListener('focus',(event)=>{
//     console.log(event.type)
//     inputValue= event.target.value
//     paragraph.innerText= event.target.value
// })

// -> BLUR EVENT
// usernameInput.addEventListener('blur',(event)=>{
//     console.log(event.type)
//     inputValue= event.target.value
//     paragraph.innerText= event.target.value
// })

// e.preventDefault is used to prevent form submitting the form .
// const form = document.querySelector('form')
// form.addEventListener('submit',(e)=>{
//     e.preventDefault()
//     console.log("form clicked")
//     console.log(e);

// })

// Understanding form event object in JavaScript
// const form = document.querySelector('form')
// form.addEventListener('submit',(e)=>{
//     e.preventDefault()
//     const myFormData= new FormData(form)

//     for (const p of myFormData.entries()) {
//         console.log(p);
//     }
// })

// Understanding how form submission works in JavaScript.
// const form = document.querySelector('form')
// form.addEventListener("submit", (e) => {
//   e.preventDefault()
//   console.log("form submitted")
// });

// click event 
const form = document.querySelector('form')
form.addEventListener("click", (e) => {
  e.preventDefault()
//   console.log(e.target)  // can be changed
//   console.log(e.currentTarget) // parent cannot be changed 
});
