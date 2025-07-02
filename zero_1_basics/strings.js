const repoCount = 29
let str = "shahbaz"
// console.log(str + repoCount) Outdated way of concatenation

console.log(`Hello my name is ${str} and my repo count is ${repoCount}`);  // this method is also known as string interpolation 

const gameName = new String("shahbazhc") // Object Type
console.log(typeof gameName)
console.log(gameName.__proto__); // this will return an empty object
console.log(gameName.toUpperCase())
console.log(gameName) // original is not changed due to the stack memory functionality

console.log(gameName.charAt(4))

console.log(gameName.indexOf('h'))

const subString = gameName.substring(1 , 4);  // last one index is not included just like python
console.log(subString)

// Trim is just like strip function in Python 
const inputForm = "    shahbaz    "
console.log(inputForm)
console.log(inputForm.trimStart())

// Replace Method in JS
const url = "https://shahbaz.com/shahbaz%20baig"
console.log(url.replace('%20' , '-'))

console.log(url.includes('mirza'))

const string =  "a quick brown fox jumps over the lazy dog"
console.log(string.split(" "))

console.log(string.length)