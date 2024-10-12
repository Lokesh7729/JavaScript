// real world example

const API_URL = "https://api.github.com/users/lokesh7729";

async function handlePromise() {

try{
  const data = await fetch(API_URL); // returns a response
  const jsonValue = await data.json();
  console.log(jsonValue)
}catch(err){
    console.log(err)
}

//   console.log(jsonValue);

  //   fetch()=> Response.json() => json value
}

handlePromise().catch((err)=>console.log(err));



// - * Async await vs promises.then/.catch ?
// Syntactical sugar - syntax play 
// both are better
// async await -> new way of writing a code