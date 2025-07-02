
// ************************************* Numbers ***************************************

// two ways of defining a number 

const score = 100;
console.log(score)

const balance = new Number(234);
console.log(balance)
console.log(balance.toString().length)
console.log(balance.toFixed(2))

var num = 12.4;
console.log(num.toString().length) // interesting as it include . as a character

let number = 123.8994
console.log(number.toPrecision(1))

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'))

// ************************************ MATHS ******************************************

console.log(Math.floor(3.9))
console.log(Math.ceil(3.1))
console.log(Math.max(1,2,4,5))
console.log(Math.min(1,2,4,5))

console.log(Math.floor(Math.random()*10) + 1)

const max = 20 
const min = 10 
console.log(Math.floor(Math.random() * (max - min + 1)) + min )
