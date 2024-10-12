// selecting elements using getElementsByTagName
// it will return html collection
const allImages = document.getElementsByTagName("img");

// Selecting Elements in JavaScript through ID and Class Name
const imgClass = document.getElementsByClassName("imagex");
const imgId = document.getElementById("imageId");

// querySelector
const imgClass1 = document.querySelector(".imagex");
const imgId1 = document.querySelector("#imageId");
// console.log(img);

// querySelectorAll -> it will give node list -> better than html collection

const all = document.querySelectorAll(".imagex");
// console.log(all);

const imageUrl = [
  "https://images.unsplash.com/photo-1470164971321-eb5ac2c35f2e?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1520038569969-98da7959fcbd?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1687308458927-9e67142990f7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const AllImages = document.querySelectorAll("img");

// for (let i = 0; i < AllImages.length; i++) {
//   AllImages[i].src = imageUrl[i];
// }

AllImages.forEach((image,i)=>{
    image.src=imageUrl[i]
})