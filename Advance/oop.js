function User(username , loginCount , isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    // return this
    // this does not matter whether we return this explicitly or not it is return implicitly
    
}


const userOne = new User("shahbaz" , 12 , true)
const userTwo = new User("Hitesh" , 12 , false)
console.log(userTwo);
console.log(userOne instanceof User)
// this new keyword takes the new context from the function and thereby makes totally new memory execution phase
// userTwo overwrites the values of userone which is bad thing in programming paradigm ( when not using {new} )


/// Steps Involved 

// 1) Object is created
// 2) new keyword form a constructor function
// 3) All arguments got injected in function / object returned through this keyword
// 4) information is printed or whatever functions you applied on it 

// ******************************************************************

// Constructor is basically the reference to itself (function defined previously)
