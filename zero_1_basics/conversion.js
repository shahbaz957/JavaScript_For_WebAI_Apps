let age = null;
let score = '33abc';
let agge = undefined;

console.log(typeof score);

let numInInt = Number(score);
console.log(typeof numInInt);
console.log(numInInt);

let numAgge = Number(agge);

let num = Number(age);
console.log(age);   // so null in number format is (0)

console.log(numAgge)


// "33" => 33
// "33abc" => NaN
// true => 1 and false => 0

// null => Number(null) ------> NaN
// Number(undefined) ------> NaN

let isLogged = true;

let isTrue = Number(isLogged);
console.log(isTrue);

let booled = 0;
let isBooled = Boolean(booled);
console.log(isBooled);


// 1 => true
// 0 => false
// "" => false
// "shahbaz" => true


