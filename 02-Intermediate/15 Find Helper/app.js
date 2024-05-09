
// The find() method is another built-in array helper in JavaScript that allows you to find the  | first element | in an array that matches a specific condition. It returns the value of the - first element- that satisfies the given testing function, or undefined if no element is found.

// ------------------------------
const peoples = [
    { name: "lokesh", age: 17 },
    { name: "john", age: 18 },
    { name: "alex", age: 20 },
    { name: "jimmy", age: 30 },
    { name: "alex", age: 30 },
  ];
  
  const result = peoples.find((person) => person.name === "alex");
  // const filterRes = peoples.filter(person => person.name === 'alex')
  // console.log(filterRes);
  console.log(result);
  // ------------------------------
  
  // ------------------------------
  const posts = [
    { id: 1, content: "Good Post" },
    { id: 1, content: "funny Post" },
    { id: 1, content: "sad Post" },
  ];
  
  const postRes = posts.find((post) => post.content === "funny post");
  console.log(postRes);
  // ------------------------------

  
  // exercise


// -------------------------------
// 1. Iterate over "ages" array
// 2. Print only those ages which is greater then 18
const ages = [3, 10, 18, 20];

function checkAge(age) {
  return age > 18;
}

const res = ages.find(checkAge);
console.log(res);

// -------------------------------
// BONUS => REFACTOR
// let products = [
//   { name: "Checkers", category: "Toys" },
//   { name: "Harry Potter", category: "Books" },
//   { name: "iPhone", category: "Electronics" },
//   { name: "Learn PHP", category: "Books" },
// ];
// let product;

// for (let i = 0; i < products.length; i++) {
//   if (products[i].category === "Books") {
//     product = products[i];
//     break;
//   }
// }
// console.log(product);

// -------------------
let products = [
  { name: "Checkers", category: "Toys" },
  { name: "Harry Potter", category: "Books" },
  { name: "iPhone", category: "Electronics" },
  { name: "Learn PHP", category: "Books" },
];

const product = products.find((product) => product.category === "Books");
console.log(product);
// -------------------
