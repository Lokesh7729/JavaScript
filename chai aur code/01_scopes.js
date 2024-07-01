let a = 10      // let have function scope 
const b = 20    // const have function scope
var c = 30      // const have global scope


function one(){
    const username= "lokesh"

    function two(){
        const website= "youtube"
        console.log(username + website);
        
    }
    // console.log(website); // not accessable bacause of the scope 
    two()
}
one()



// functions
console.log(add(5));
console.log(addTwo(5)); // this will give error 

function add(num){
    return num+1;
}

const addTwo= function(num){
    return num+2
}