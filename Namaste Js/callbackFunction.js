// What is a callback functions in javascript ?

// first class citizens

// setTimeout(() => {
//   console.log("timer");
// }, 5000);

// function x(y) {
//   console.log("x");
//   y();
// }

// x(function y() {
// y is callback function
//   console.log("y");
// });

function attachEventListner() {
  let count = 0;
  const button = document.querySelector("#clickMe");
  button.addEventListener("click", function abc() {
    console.log(`Button Clicked ! ${++count}`);
  });
}

attachEventListner()

// garbage collection & removeEventListeners 
