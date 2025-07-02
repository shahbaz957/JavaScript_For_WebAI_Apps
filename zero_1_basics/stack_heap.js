console.log("hello world")
// Two types of memories are there 
// Stack Memory (Primitive datatype (Number , String e.t.c)) and  Heap Memory (Non_Primitive (Reference Type))

// Stack Memory (Call by value) ==> you get the copy of variable declared

// Heap Memory (Call by reference) ==> you get directly memory address of variable not copy and all changes will be depicted in the original variable

let myYt = "shahbazInfo"; // Goes to stack
let another_Name = myYt

another_Name = "InfowithMSB"
console.log(myYt)
console.log(another_Name)

// in Stack Memory we got access to the copy of the variable 

// While in Heap Memory we got access to the original memory reference of the variable

let user = {
    email : "user@mail.com",
    name : "shahbaz",
}
let user1 = user
user1.email = "user2@email.com"
console.log(user.email) 

console.log(user1.email) 