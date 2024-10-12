const months = [
  'jan',
  'feb',
  'march',
  'april',
  'may',
  'june',
  'july',
  'August ',
]
// map
// const capitalMonths= months.map((month,index) => {
//   console.log(month , index+1)
//   return month.toUpperCase()
// })

// filter

// const filterMonths= months.filter((month,index,array) => {
//     // console.log(month , index+1)
//     // console.log(month.length<=4);
//     return month.toLocaleLowerCase().includes('a')
//   })
const filterMonths = months.filter((month, index, array) => {
  return index > 4
})

//   console.log(filterMonths);

const students = [
  {
    name: 'lokesh',
    age: 20,
  },
  {
    name: 'arpit',
    age: 21,
  },
  {
    name: 'dodo',
    age: 18,
  },
  {
    name: 'naina',
    age: 15,
  },
  {
    name: 'Abeer',
    age: 25,
  },
]

const filterStudent = students.filter((student, index, array) => {
  // console.log(student.age);
  return student.age <= 18
})

// reduce

const number = [1, 2, 3, 4, 5, 6]
number.reduce((accumulator, current, index) => {
  console.log(accumulator)
  debugger
  return accumulator + current
}, 0)
