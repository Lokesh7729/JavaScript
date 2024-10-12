function sayHi() {
  console.log("helloooo");
  body = document.querySelector("body");
  body.style.backgroundColor = "black";
  
  h1.innerText="HACKED"
  h1.style.color="red"
  h1.style.fontSize='10rem'
}

function clickMe(){
    console.log('you clicked me !');
}

function dbclick(){
alert('you double clicked me !');
}
h1=document.querySelector("h1");
h1.onclick=sayHi


