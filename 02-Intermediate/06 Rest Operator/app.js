// The rest parameter syntax allows a function to accept an indefinite number of arguments
// as an array, providing a way to represent variadic functions in JavaScript.
function user(...userData) {
    console.log(userData);
  }
  
  user("Lokesh", 17, "Male", "Programming");
  
  // ---------------------------
  double = (...numbers) => numbers.map((num) => num * 2);
  console.log(double(1, 2, 3, 4, 5));
  // ---------------------------
  
  function person(firstName, lastName, ...hobbies) {
    console.log("First Name: ", firstName);
    console.log("Last Name: ", lastName);
    console.log("Hobbies: ", hobbies);
  }
  
  person("Lokesh", "WebDev", "programming", "football");


  // exercise

  // 1. Create a function name (sum) which takes (unlimited) amount of parameters
// 2. No matter how many parameters you provide it will return the sum value of those params!

function sum(...args) {
    return args.reduce((previous, current) => {
      return previous + current;
    });
  }
  
  console.log(sum(1, 2, 3));
  // expected output: 6
  
  console.log(sum(1, 2, 3, 4));
  // expected output: 10