// fetch is used to get data over the network

// api -> application programming interface

// -> syntax - let promise = fetch(url,[option]) -> return a promise

const URL = "https://api.github.com/users/lokesh7729";

fetch(URL)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
