// Immediately Invoked Function Expression (IIFE)

(function chai(){
    console.log('db connected')
})();

// global scope pollution can cause problem so for removing that pollution we use iife 

((name)=>{
    console.log(`db connected two ${name}`);
})('lokesh')