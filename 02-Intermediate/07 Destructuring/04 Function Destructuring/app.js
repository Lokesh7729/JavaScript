// -------------------------------
const person = {
    name: "John Doe",
    age: 30,
    country: "USA",
  };
  
  function printPersonInfo({ name, age, country }) {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Country: ${country}`);
  }
  
  printPersonInfo(person);
  // -------------------------------
  
  // -------------------------------
  // Example 2
  let options = {
    title: "My menu",
    items: ["Item1", "Item2"],
  };
  
  // The (w) & (h) property is essentially renaming the (width) & (height) props
  
  function showMenu({
    title = "Untitled",
    width: w = 100, // width goes to w
    height: h = 200, // height goes to h
    items: [item1, item2], // items first element goes to item1, second to item2
  }) {
    console.log(`${title} ${w} ${h}`); // My Menu 100 200
    console.log(item1); // Item1
    console.log(item2); // Item2
  }
  
  showMenu(options);
  // -------------------------------
  
  // In the showMenu function, renaming the properties to w and h from width and height is done as part of the destructuring process. This allows the function to use shorter and more convenient variable names while still extracting the corresponding values from the object.
  
  // The main reasons for renaming properties during destructuring are:
  
  // Shorter and More Concise Code: Renaming properties to shorter names can make the code more concise and easier to read. In this case, using w and h instead of width and height requires less typing and reduces the visual clutter, especially if you use the properties multiple times within the function.
  
  // Avoiding Naming Conflicts: If the function already has variables named width and height, renaming the properties during destructuring prevents naming conflicts. This allows you to access the properties from the object without overwriting existing variables with the same names.
  
  // Default Value Assignment: Renaming also allows you to assign default values to the renamed variables. In the example code, width: w = 100 and height: h = 200 mean that if the width and height properties are missing in the object being passed to the function, w will be assigned the default value 100, and h will be assigned the default value 200.






// ----------------- Instructions
// You are given a function getStudentInfo that takes an object representing a student as an argument. The student object has the following properties:

// const student = {
//   name: "John Doe",
//   age: 20,
//   rollNumber: "A123",
//   courses: ["Mathematics", "Science", "History"],
// };

// Your task is to use function destructuring to extract the name, age, and courses properties from the student object and then return them as an object from the getStudentInfo function.

// const student = {
//   name: "John Doe",
//   age: 20,
//   rollNumber: "A123",
//   courses: ["Mathematics", "Science", "History"],
// };

// const { name, age, courses } = getStudentInfo(student);
// console.log(name); // John Doe
// console.log(age); // 20
// console.log(courses); // ["Mathematics", "Science", "History"]

// Write the getStudentInfo function using function destructuring to achieve this task.
// ------------------------------------------

// *********** Solutions
function getStudentInfo({ name, age, courses }) {
    return { name, age, courses };
  }
  
  // Testing the function with the example student object
  const student = {
    name: "John Doe",
    age: 20,
    rollNumber: "A123",
    courses: ["Mathematics", "Science", "History"],
  };
  
  const { name, age, courses } = getStudentInfo(student);
  console.log(name); // John Doe
  console.log(age); // 20
  console.log(courses); // ["Mathematics", "Science", "History"]
  