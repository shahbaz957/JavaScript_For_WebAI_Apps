
const user = {
    username : "Shahbaz",
    age  : 18,
    welcomeMsg : function(){
        console.log(`${this.username} welcome to this webpage`)
        // console.log(this)
    }
// this refers to the current context 
}
user.username = "Sam"
user.welcomeMsg()

console.log(this)  
// because node has empty object but when you run this on browser it will return an window object

// ******************************** This in Functions ************************************

function fun(){
    let username = "Shahbaz";
    console.log(this.username) // this here is not refering to the current context
}
fun()

// const add = (num1 , num2) =>{
//     return num1 + num2; // this is called explicit return 
// }

const add = (num1 , num2) => num1 + num2; // this is called implicit return 

console.log(add(1,3))

const funcObj = () => ({name : "Shahbaz"}); // must wrap in ()
console.log(funcObj())

const person = {
  name: "Shahbaz",
  speak: function () {
    console.log(this.name); // ✅ this refers to 'person'
  }
};
person.speak(); // Output: Shahbaz

const name = "Sammy"
const person1 = {
  name: "Shahbaz",
  speak: () => {
    console.log(this.name); // (this refers to global/window)
  }
};
person1.speak(); // Output: undefined

// this is not bound to the object, but to the surrounding (lexical) scope 