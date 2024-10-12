const h1 = document.querySelector("h1");
// const input = document.querySelector("input");


// h1.addEventListener('keypress',(e)=>{
//     console.log(e.key);   
// })

// tabindex = "0 "


// Understanding keyboard events in JavaScript  

// h1.addEventListener('keypress',(e)=>{
//     // console.log(e);   
//     console.log(' code ->' ,e.code);   
//     console.log(' value -> ',e.key);   
// })

// // keyup event 
// h1.addEventListener('keyup',(e)=>{
//     // console.log(e);   
//     console.log(' code ->' ,e.code);   
//     console.log(' value -> ',e.key);   
// })

// keydown event 
h1.addEventListener('keydown',(e)=>{
    // console.log(e);   
    console.log(' code ->' ,e.code);   
    console.log(' value -> ',e.key);   
})