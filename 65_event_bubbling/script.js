const green= document.querySelector('.green')
const pink= document.querySelector('.pink')
const blue= document.querySelector('.blue')
const p= document.querySelector('p')

// use capture is by defalut false then bubbling is there -> inside out (bubbling) , outside in (capturing)

// window.addEventListener('click',(e)=>{
//     console.log('5 window event listner !');    
// },{capture:true})
// document.body.addEventListener('click',(e)=>{
//     console.log('4 body event listner !');    
// },{capture:true})
// green.addEventListener('click',(e)=>{
//     console.log('3 green event listner !');    
// },{capture:true})
// pink.addEventListener('click',(e)=>{
//     console.log('2 pink event listner !');    
// },{capture:true})

// blue.addEventListener('click',(e)=>{
//     e.stopPropagation()
//     console.log('1 blue event listner !');    
// },{capture:true,})

// blue.addEventListener('click',(e)=>{
//     e.stopPropagation()
//     console.log('1 blue event listner !');    
// },{once:true})
