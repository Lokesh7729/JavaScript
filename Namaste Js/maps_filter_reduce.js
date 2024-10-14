const arr = [5, 1, 3, 2, 6];

// double  - [10,2,6,4,12]

// triple [15,3,9,6,18]

// binary

function double(x) {
  return x * 2;
}
function triple(x) {
  return x * 3;
}
function binary(x) {
  return x.toString(2);
}

// const db = arr.map(double);
// const tp = arr.map(triple);
// const b = arr.map(binary);
// console.log(db)
// console.log(tp)
// console.log(b)

// const output = arr.map((x) => {
//   return x.toString(2);
// });
// console.log(output);

// filter function

const arrFilter = [8, 24, 50, 2, 25, 2, 10, 5, 7];

function isOdd(x) {
  return x % 2;
}
function isEven(x) {
  return x % 2 == 0;
}

const output = arrFilter.filter(isOdd);
// console.log(output);
const output2 = arrFilter.filter(isEven);
// console.log(output2);

const greaterThan20 = arrFilter.filter((x) => {
  return x > 20;
});
// console.log(greaterThan20);

// reduce

const red = [1, 3, 4, 5, 20, 8, 34, 13];

function findSum(red) {
  let sum = 0;
  for (let i = 0; i < red.length; i++) {
    sum = sum + red[i];
  }
  return sum;
}
// console.log(findSum(red))

// this is how we do this with reduce

const outputt = red.reduce(function (acc, curr) {
  acc = acc + curr;
  return acc;
}, 0);
// console.log(outputt);

// max

function max(red) {
  let max = 0;
  for (let i = 0; i < red.length; i++) {
    if (red[i] > max) {
      max = red[i];
    }
  }
  return max;
}

// const ans = max(red);
// console.log(ans);

// max - reduce method

const maximum = red.reduce(function (max, curr) {
  if (curr > max) {
    max = curr;
  }
  return max;
}, 0);

// console.log(maximum);

// real life example

const users = [
  { firstName: "john", lastName: "Biden", age: 26 },
  { firstName: "jimmy", lastName: "cob", age: 75 },
  { firstName: "sam", lastName: "lewis", age: 50 },
  { firstName: "Ronald", lastName: "Mathew", age: 26 },
];

// list of full names

const nameobj = users.map((x) => x.firstName + " " + x.lastName);
// console.log(nameobj);

const ageFIlter = users.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

// console.log(ageFIlter);

// filter

const fil = users.filter((x) => x.age < 30).map((x) => x.firstName);
console.log(fil);

//  reduce method to accumulate the first names of users whose age is less than 30.

const result = users.reduce((acc, user) => {
  if (user.age < 30) {
    acc.push(user.firstName);
  }
  return acc;
}, []);

console.log(result);
