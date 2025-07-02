// datatypes in js is divided in two types primitive and non-primitive
// the base of this division is just for the reason of how data is stored and retrieve from memory

// Primitive Types are :: Number , Boolean , BigInt , String , null , undefined , Symbol 

// Non-Primitive (Reference Type) :: Array , Objects , Function 


// number is number whether it is in int format or float format in javascript

const isLoggedIn = false;
const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id == anotherId);   // the basic purpose of Symbol is Uniqueness

const bigNumber = 324453452542332434n  // type is undefined
console.log(typeof bigNumber);   //  Undefined

const heros = ["shahbaz" , "ali" , "007"];

// Object 
let myObj = {
    name : "shahbaz",
    age : 18,
}
console.log(myObj)


const myFunction = function(){
    console.log("hello world")
}
console.log(typeof myFunction) // function object

console.log(typeof anotherId)

 // Symbol is primitive datatype that is used for the storage of unique values even if they are same
 
