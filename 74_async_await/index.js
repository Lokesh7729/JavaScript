/*
- * what is async ?
- * what is await ?
- * How a sync await work behind the scenes?
- * Example of using async/await?
- * Error handling ?
- * Interviews ?
- * Async await vs promises.then/.catch ?
*/

// async is a keyword that is used before a function to create a async function

// 1. async function always return a promise
// 2. It will wrap the value to a promise and then return.
// 3. asyns and await are used to handle promises
// 4. await is a keyword that can only be used inside a async fucntion
// 5. we write await in the front of promise and it will resolve it .
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise resolved value !");
  }, 5000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise resolved value !");
  }, 10000);
});

// always return a promise
// async function getData() {
//   return p; // if return value is promise then it will return p
// }

// const dataPromise = getData();
// dataPromise.then((res) => console.log(res));

// before ---->

// -----------------------------------

// js engine will not wait for promise to be resolved
// function getData() {
//   p.then((res) => console.log(res));
//   console.log("namaste javascript");
// }
// getData();

// ------------------------------------

// after ----->
console.log("hello world");
// js engine was wait for promise to be resolved
async function handlePromise() {
  const val = await p1; // suspend the execution(move out of call stack ) and wait for p1 time and then move a head .(come back) start executing from where it left .
  console.log("namste javascript");
  console.log(val);

  const val2 = await p2; // 
  console.log("namste javascript 2");
  console.log(val2);
}

handlePromise();


// handlePromise()
// call stack
// async - p1,p2