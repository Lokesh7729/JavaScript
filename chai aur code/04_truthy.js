const userEmail = []

if (userEmail) {
    console.log('got user email');
}else{
    console.log('dont have user email');
    
}

//  falsy values
//-> false , 0 , -1 , BigInt 0n , "", null , undefined , NaN

// truthy values
// -> "0" , 'false' , " " , [] , {}  , function(){} 



if(userEmail.length===0){
    console.log("Array is empty");
}
const emptyObj= {}

if(Object.keys(emptyObj).length===0){
    console.log('Object is empty');
    
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1= 5 ?? 10
val1 = null ?? 10

console.log(val1);

