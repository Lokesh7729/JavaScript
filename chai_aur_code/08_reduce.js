const myNums=[1,2,3 ]

const myTotal= myNums.reduce(function(acc,currVal){
    console.log(`acc: ${acc} and currval : ${currVal}`);
    return acc+ currVal
},0)
console.log(myTotal);