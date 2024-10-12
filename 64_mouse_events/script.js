head = document.querySelector("h1");
card= document.querySelector(".card")
container=document.querySelector(".container")
addCard=document.querySelector(".add-card")
let num=1;

// card.addEventListener("mousedown",(event)=>{
//     console.log(event)
//     const div = document.createElement("div");
//     div.classList.add("card")
//     container.append(div)
//     div.innerText=num++
    
// })

// mouse up 
// card.addEventListener("mouseup",(event)=>{
//     console.log(event)
//     const div = document.createElement("div");
//     div.classList.add("card")
//     container.append(div)
//     div.innerText=num++
// })

// // MOUSE ENTER
// card.addEventListener("mouseenter",(event)=>{
//     console.log(event)
//     const div = document.createElement("div");
//     div.classList.add("card")
//     container.append(div)
//     div.innerText=num++

// })

// // MOUSE Leave
// card.addEventListener("mouseleave",(event)=>{
//     console.log(event)
//     const div = document.createElement("div");
//     div.classList.add("card")
//     container.append(div)
//     div.innerText=num++
// })

// MOUSE move
// card.addEventListener("mousemove",(event)=>{
//     console.log(event)
//     const div = document.createElement("div");
//     div.classList.add("card")
//     container.append(div)
//     div.innerText=num++
// })


// MOUSE hover effect
card.addEventListener("mouseover",()=>{
    addCard.style.backgroundColor = 'plum';
    addCard.classList.add("div-scale");
})
card.addEventListener("mouseout",()=>{
    addCard.style.backgroundColor = '';
    addCard.classList.remove("div-scale");
})

// difference between mouseover and mouseenter events.

// -> mouseover apply on its child inside it  
// -> mouseenter fire only one time to main element 


// Wheel event 
// card.addEventListener("wheel",(event)=>{
//     console.log(event)
//     const div = document.createElement("div");
//     div.classList.add("card")
//     container.append(div)
//     div.innerText=num++
// })


// scroll event 
// document.body.addEventListener("scroll",(event)=>{
//     console.log(event)
//     const div = document.createElement("div");
//     div.classList.add("card")
//     container.append(div)
//     div.innerText=num++
// })

// touchstart event 
// card.addEventListener("touchstart",(event)=>{
//     console.log(event)
//     const div = document.createElement("div");
//     div.classList.add("card")
//     container.append(div)
//     div.innerText=num++
// })

// touchend event 
// card.addEventListener("touchend",(event)=>{
//     console.log(event)
//     const div = document.createElement("div");
//     div.classList.add("card")
//     container.append(div)
//     div.innerText=num++
// })

// touchmove event 
// card.addEventListener("touchmove",(event)=>{
//     console.log(event)
//     const div = document.createElement("div");
//     div.classList.add("card")
//     container.append(div)
//     div.innerText=num++
// })

// // drag event 
// head.addEventListener("drag",(event)=>{
//     console.log(event)
//     const div = document.createElement("div");
//     div.classList.add("card")
//     container.append(div)
//     div.innerText=num++
// })

// // pointer move event 
// card.addEventListener("pointermove",(event)=>{
//     console.log(event)
//     const div = document.createElement("div");
//     div.classList.add("card")
//     container.append(div)
//     div.innerText=num++
// })

// pointer enter 
// card.addEventListener("pointerenter",(event)=>{
//     console.log(event)
//     const div = document.createElement("div");
//     div.classList.add("card")
//     container.append(div)
//     div.innerText=num++
// })

// pointer leave 
card.addEventListener("pointerleave",(event)=>{
    console.log(event)
    const div = document.createElement("div");
    div.classList.add("card")
    container.append(div)
    div.innerText=num++
})


