// function bind together with its lexical environment along with its
// function along with its lexcial scope bundled together forms a closures
//  a closure gives a function access to its outer scope

function x() {
  var a = 8;
  function y() {
    console.log(a);
  }
  a=100; // refrence is stored 
  return y; // when they are return they return a closure with its value
}
// function x() {
//   var a = 8;
//   return function y() {
//     // when they are return they return a closure with its value
//     console.log(a);
//   };
// }

var z = x();
//.....

z();


// uses of closures :
// module design pattern
// currying
// functions like once 
// memoize
// maintaining state in async world 
// setTimeouts
// Iterators
// and many more ...