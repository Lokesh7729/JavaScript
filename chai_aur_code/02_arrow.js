const user ={
    username: "lokesh",
    price: 1000,

    welcomeMessage : function(){
        // console.log(`${this.username}, welcome to our website`);
        // console.log(this); // current context
        
    }
}
// user.welcomeMessage()
// user.username="abeer";
// user.welcomeMessage()

// console.log(this);



// function chai(){
//     let username= "lokesh"
//     console.log(this.username) // will give undefined 
// }
// chai()

// const chai= () => {
//     let username = "lokesh"
//     console.log(this.username);
// }
// chai()

// //////////////////////////////////////

// function addTwo(num1, num2){
//     return num1+num2
// }


const addTwo = (num1, num2)=>  (num1+num2) // implicit return
console.log(addTwo(10,20))