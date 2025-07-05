const userEmail = "Shahbaz@gmail.com"
if(userEmail){
    console.log("Got user email")
}else{
    console.log("Dont recieve user email value")
}


// Falsy Value

// false 0 -0 "" BigInt 0n null undefined NaN 
// Above are the falsy values all other are just True Values

// Surprising Truthy Values

// '0' 'false' " " [] {} function(){}

const obj = {}
if (Object.keys(obj).length == 0){
    console.log("Object is empty")
}

// Nullish Coalescing Operator ??
// let val1 = 5 ?? 10
let val1 = null ?? 3
console.log(val1)

// Ternary Operator

const num = 1
num == 2 ? console.log("hello world") : console.log("False")