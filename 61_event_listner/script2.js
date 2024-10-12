hed = document.querySelector("h1");
card= document.querySelector(".card")
container=document.querySelector(".container")
// function sayHi() {
//     console.log("helloooo");
//     card=document.querySelector(".card")
//     body = document.querySelector("body");
//     body.style.backgroundColor = "black";
//     card.style.backgroundColor = "white";
//     card.style.color = "black";
//     body.style.color="white"
    
//     h1.innerText="HACKED"
//     h1.style.color="red"
//     h1.style.fontSize='10rem'
//   }
// hed.addEventListener('click', sayHi)



// card.addEventListener('click',(e)=>{
//   card.style.backgroundColor='green'
//   hed.style.color='green'
// })

// card.addEventListener("dblclick", (event) => {
//   card.style.backgroundColor='black'
//   hed.style.color='black'

// });

// card.addEventListener("mouseover", (event) => {
//   card.style.backgroundColor='red'
// });
let num=1;

card.addEventListener("click",(event)=>{
    const div = document.createElement("div");
    div.classList.add("card")
    container.append(div)
    div.innerText=num++
    
})
