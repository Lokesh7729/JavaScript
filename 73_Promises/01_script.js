// Promises are used to handle async operations in javscript
// promise objects are immutable

// e-commerce example

// callback- > we are passing a fucntion to another function

// const cart=['shoes', 'pants','kurta']

// createOrder(cart,function(orderId){
//     proceedToPayment(orderId);
// }); // return order Id

//  promise -> we are attaching a call back function to a promise object

// const promise = createOrder(cart); //  return us a promise -> empty object {data : undefined } it will hold this -> progam will go on executing -> after some time this promise object will fill with data automatically

// promise objects are immutable

// promise.then(function(orderId){
//     proceedToPayment(orderId);
// });

//  it gives guarantee that it will call this call back fucntion whenever there is data inside promise object
// it call it only once

// -------------------------------------------------------------

const GITHUB_API = "https://api.github.com/users/lokesh7729";

// fetch() // -> api given by browers to us. to make external calls

const user = fetch(GITHUB_API); //* fetch returns us promise
console.log(user);
// promise state -> tells which state the promise is .

user.then(function (data) {
  console.log(data);
});

// pending
// fullfilled
// rejected

// ----------------------------------------------------------

// what is promise ?

// ans -> promise object is a place holder which will be filled later with a value .
// promise object is a place holder for a certain period of time until we receive a value from a async operation.

//  a promise is an object represting the eventual completion of an async operation .
