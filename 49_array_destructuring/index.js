const colors = ['red', 'blue', 'green', 'yellow', 'pink']
console.log(colors)

const [a, b, c, d] = colors

console.log(a)

const user = {
  name: 'lokesh',
  age: 20,
  dep: 'CS',
  branch: 'BCA',
}

const { name: username, age, dep, branch } = user

console.log(username)
