function outer(b) {
  function inner() {
    // inner function has access to its outer environment
    console.log(a, b);
  }
  let a = 10;
  return inner;
}
outer("hello world")();

// data hiding

// function counter() {
//   var count = 0;
//   return function incrementCounter() {
//     count++;
//     console.log(count);
//   };
// }
// var counter1 = counter();
// counter1();

//
function Counter() {
  var count = 0;
  this.incrementCounter = function () {
    count++;
    console.log(count);
  };
  this.decrementCounter = function () {
    count--;
    console.log(count);
  };
}


var counter1=new Counter()
counter1.incrementCounter()
counter1.decrementCounter()
counter1.decrementCounter()


// disadvantages of closuers 
// overconsumption of memory

// garbage collector 