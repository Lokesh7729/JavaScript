const everyNumber=[2,4,6,8,10]


//SOME -> 1 true then all true

// everyNumber.some((num,index)=>{
//     console.log(num);
//     return (num%2===1)? console.log('ODD '):console.log('EVEN')
// })


// EVERY -> All true then only true 

// everyNumber.every((num,index)=>{
//     console.log(num);
//     return num%2===0
// })



// argument -> array like structure 
function hello(a,b){
    console.log(arguments);
    return a+b;

}