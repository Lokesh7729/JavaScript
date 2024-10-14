// function x() {
// x is callback function
//   console.log("namaste !");
// }

// function y(x) {
// y is higher order function
//   x();
// }

// --------------------

const radius = [3, 1, 2, 4];

// const calculateArea = function (radius) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(Math.PI * radius[i] * radius[i]);
//   }
//   return output;
// };

// console.log(calculateArea(radius));

const area = function (radius) {
  return Math.PI * radius * radius;
};
const circumference = function (radius) {
  return 2 * Math.PI * radius;
};

const calculate = function (radius, logic) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};

// console.log(calculate(radius,area))
// console.log(calculate(radius,circumference))

// reusability
// modularity

// Pollyfil for map function in js

console.log(radius.map(area));
