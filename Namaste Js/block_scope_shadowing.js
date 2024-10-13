// scopes
// 1 -> Global scoped     - var 
// 2 -> Function scoped   - var , let , const 
// 3 -> Blocked scoped    - let, const 

{
  // block
  // Compound statement
  // we group multiple statements together in a block so we can use it where js expects 1 statement
}

if (true) {
  // expects 1 statement
}

// block scope
{
  var a = 10;
  let b = 20;
  const c = 30;
  console.log(a);
  console.log(b);
  console.log(c);
}

console.log(a);
// console.log(b);
// console.log(c);

// shadowing in js

console.log("shadowing ...");

var a = 100;
let b = 200;
{
  var a = 10;
  let b = 20;
  const c = 30;
  console.log(a);
  console.log(b);
  console.log(c);
}
console.log(a);
console.log(b);

// Variable shadowing occurs when an inner scope declares a variable with the same name as an outer scope.
// This results in the inner scope’s variable overriding the outer scope’s variable and shadowing it.
