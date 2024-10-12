cart = ["kurta", "pajama", "shirt"];

/* 
createOrder()
proceedToPayment()
showOrderSummary()
updateWallet()
*/

createOrder(cart)
  .then(function (orderID) {
    console.log(orderID);
    return orderID;
  })
  .then(function (orderID) {
    return proceedToPayment(orderID);
  })
  .then(function ({ message, amt }) {
    console.log(message, "of amount:", amt);
    return showOrderSummary(message, amt);
  })
  .then(function ({ message, amt }) {
    console.log("Your wallet has beed debited by:", amt);
  })
  .catch(function (err) {
    console.log(err.message);
  })
  .then(function () {
    console.log("No matter what happens, I will get executed");
  });

// logic
function createOrder(cart) {
  const promise = new Promise(function (resolve, reject) {
    if (!validateCart) {
      const err = new Error("cart is empty ! ");
      reject(err);
    }
    // logic for creating order id
    orderID = "12345";
    if (orderID) {
      setTimeout(function () {
        resolve(orderID);
      }, 2000);
    }
  });
  return promise;
}

function proceedToPayment(orderID) {
  // Logic for handling payment.
  // This function returns a promise
  return new Promise(function (resolve, reject) {
    resolve({
      message: `Payment Successful for order id: ${orderID}`,
      amt: 3000,
    });
  });
}

function showOrderSummary(paymentInfo, amt) {
  return new Promise(function (resolve, reject) {
    // console.log(amt);
    if (amt >= 2000) {
      resolve({ message: ` You have ordered items that cost ${amt} RS `, amt });
    } else {
      reject(new Error("Please buy more for discount"));
    }
  });
}

function validateCart(cart) {
  return true;
}
