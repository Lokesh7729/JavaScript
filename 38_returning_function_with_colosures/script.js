const a=4;
const b=6;
function add(){
    console.log(a+b);
}

add()

// console.log(add);
// console.dir(add)

function outer(){
    const a=10;
    function parent()
{
    const b=20;
    
    function add(){
        console.log(a + b);
    }
    return add
}
return parent()
}

const add1= outer()

console.dir(add1)