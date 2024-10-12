const fruits = ['Apple', 'Banana', 'Grapes', 'Dates']
console.log(fruits[2])
fruits[10] = 'kalu'
console.log(fruits)

const color = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
color[color.length] = 'purple'
console.log(color)

// add new elements - > push

color.push('white')
console.log(color)

// remove element form array - > pop

color.pop()
console.log(color)

color.shift()
color.unshift('neon')
console.log(color)

// concat

const one = [1, 2, 3, 4, 5]
const two = [6, 7, 8, 9, 10]
const conCat = one.concat(two)
console.log(conCat)

const animals = ['car', 'rat', 'rabbit', 'bear', 'lion']
const index = animals.indexOf('lion')
console.log(index)

/*
    pop()
    push()
    shift()
    unshift()
    concat()
    indexOf()
    includes()
    reverse()
    sort()
    slice() -> DOES not change actual array and return new array

    splice()->  change original array and  method adds and/or removes array elements.
*/

// Create an Array
const fruits = ["Banana", "Orange", "Apple", "Mango"];

// At position 2, add "Lemon" and "Kiwi":
fruits.splice(2, 0, "Lemon", "Kiwi");