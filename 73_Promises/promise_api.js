//! 1 . Promise.all() -> [p1,p2,p3] aka fail fast
// if any of the promise get fail then output will be error.
// as soon as error happen it will return the error . after 1 sec you will see an error . it will not wait for other proimise to get success .

//  not wait for all the promise and get rejected
// ! ALL or None

// ! 2 . promise.allSetteled () ->
//  wait for all promise to settle weather they are success for failure .

//! 3. Promise.race() ->
// who finishes first will be the 
// value of first settled promise 

//! 4 Promise.any() -> first settled success 
// wait for 1st success
// if all fail -> return aggregate error
// array of all 3 error [err1,err2,err3]

// ? aggreaget error -> 

// const p1= fetch("")

const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P1 Success"), 3000);
  setTimeout(() => reject("P1 fail"), 3000);
});
const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P2 Success"), 1000);
  setTimeout(() => reject("P2 fail"), 1000);
});
const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P3 Success"), 2000);
  setTimeout(() => reject("P3 fail"), 2000);
});
Promise.any([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
    console.log(err.errors)
  });



// settled -> got the result 
// -resolve (success)
// -reject (failure)