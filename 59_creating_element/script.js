const container = document.querySelector(".container");
// const img= document.querySelector('img')

const image = document.createElement("img");
image.src =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png";
container.append(image);
image.classList.add("my-img");
image.id = "img-id";

// for (let i = 2; i <= 100; i++) {
//   const div = document.createElement("div");
//   const newImage = document.createElement("img");
//   const para = document.createElement("p");
//   newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
//   para.innerText = `${i}`;
//   div.append(newImage, para);
//   container.append(div);
// }


let myHtml= ``
for (let i = 1; i <=100; i++) {

    myHtml+=`
        <div class="img-container">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png">
        </div>
    `
}
container.innerHTML=myHtml
