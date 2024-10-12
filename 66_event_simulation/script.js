const addCardBtn = document.querySelector(".card");
const container = document.querySelector(".container");
const input = document.querySelector("input");
const form = document.querySelector("form");

let count = 1;

addCardBtn.addEventListener("click", () => {
  const newCard = document.createElement("div");
  newCard.classList.add("card");
  newCard.innerText = count++;
  container.append(newCard);
});

// focus event
// setTimeout(() => {
//     input.focus()
//     console.log('input focused !')
// }, 2000);

// blur event
// setTimeout(() => {
//     input.blur()
//     console.log('input blur !')
// }, 4000);

// submit event
// setTimeout(() => {
//     form.submit()
//     console.log('form submitted !')
// }, 3000);

// click event
// const intervalId= setInterval(()=>{
//     if(count >= 1000){
//         clearInterval(intervalId)
//     }
//     addCardBtn.click()
// },1)
