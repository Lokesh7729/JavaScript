async function makeRequest() {
  const url =
    "https://jsonplaceholder.typicode.com/comments?postId=1";

  const response = await fetch(url) // execution stops here 
  .then((res)=> res.json())
  .then(data=> console.log(data))
console.log('hiiii') // run after the above code if we use await fnc

}

makeRequest()