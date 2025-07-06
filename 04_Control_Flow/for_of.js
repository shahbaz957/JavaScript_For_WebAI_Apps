// These all loops are basically in js array specific loops
// Arrays and objects are very important data structures in Javascript

// For of Loop
const arr = [1,2,3,4,5]
for (const val of arr) {
    console.log(val)
}

const greetings = "Hello World"
for (const i of greetings) {
    console.log(i)
}

// MAPS
const map = new Map()
map.set("PAK" , "pakistan")
map.set("USA" , "United States of America")

// maps contain the unique value and maintain the order of elements
console.log(map)
for (const [key,value] of map) {
    console.log(`${key} --> ${value}`)
    
} 

