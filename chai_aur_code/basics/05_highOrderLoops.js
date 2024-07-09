// for of 

// ["", "" , " "]
// [{},{},{}]

const arr=[1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}

// maps -> holds key value pairs 
    // maps are not iterable 

const map= new Map()
map.set('in',"india")
map.set("usa","united states of america")
map.set("en","england")
// console.log(map);

for (const [key,value] of map) {
    // console.log(key,':', value);
    
}


const myObj ={
    'game1':'NFS',
    'game2':'spiderman'
}
// this will not work in object -> for of loop
// for (const [key,values] of myObj) {
//     console.log(key);
    
// }

const myObject={
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

// for in loop

for (const key in myObject) {
    //  console.log(`${key} shortcut is for ${myObject[key]}`);
     
}

const programming=["js", "c++" ,"react" , "ruby"];

for (const key in programming) {
        // console.log(programming[key]);
}

// for each
const coding = ["js", "c++" ,"react" , "ruby","node"];
coding.forEach((key,index, arr)=>{
    console.log(key,index,arr);
})


const myCoding= [
    {
        languageName: 'javascript',
        languageFileName: 'js'
    },
    {
        languageName: 'python',
        languageFileName: 'py'
    },
    {
        languageName: 'c++',
        languageFileName: 'cpp'
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
})