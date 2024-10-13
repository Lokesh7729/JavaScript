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
let b=200;
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


