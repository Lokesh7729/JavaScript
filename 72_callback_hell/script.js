

// Javascript is a Synchronous single threaded language -> one thing at a time -> 1 call stack

// 0 -> callback hell
// 1-> inversion of control

console.log("namaste");

setTimeout(function () {
  console.log("javascript");
}, 5000);

console.log("season 2");

// suppose we are building a e-commerce website

const cart = ["shoes", "kurta", "pants"];

// create an order
// payment

api.createOrder(cart, function () {
  api.proccedToPayment(function () {
    api.showOrderSummary(function () {
      api.updateWallet();
      // ! CALL BACK HELL -> One callback inside another callback and so on
      // Pyramid of DOOM
    });
  });
});

createOrder(cart)
  .then(function (orderId) {
    return proccedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    return showOrderSummary(paymentInfo);
  })
  .then(function (paymentInfo) {
    return updateWallet(paymentInfo);
  });

//  old way
// api.createOrder(cart, function (){
//     api.proccedToPayment()
// })
