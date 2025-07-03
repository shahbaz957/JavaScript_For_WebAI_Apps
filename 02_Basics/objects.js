// *************** Events and Objects are the most crucial concepts in JavaScript 

//Object.create // This method create Singleton object  

const mySym = Symbol('key1');
const JsUser = {
    name : "Shahbaz",
    [mySym] : "My Symbol",
    age : 18,
    email : "shahbaz@gmail.com",
    isloggedIn : true
}
// this is how you gonna create a symbol and use it as a key in object
console.log(JsUser.email)
console.log(JsUser['email'])

console.log(JsUser[mySym])

JsUser.email = "shahbaz@msb.com"
// Object.freeze(JsUser)      // After freezing this you cannot change any elements of object
JsUser.email = "shahbaz@google.com"
console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello new bee of JavaScript")
}
console.log(JsUser.greeting())

JsUser.greeting1 = function(){
    console.log(`Hello ${this.name} How are you !`)
}
JsUser.greeting1()