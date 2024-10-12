// Asynchronous code -> runs not line by line -> given to brower 
// Synchronous code -> runs line by line -> use main thread 

const startTime= Date.now()
let currentTime= startTime

while (startTime+4000 > currentTime) {
    currentTime = Date.now()
    
}