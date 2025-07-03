// Variable while defining the function are known as parameter 

function add (num1 , num2){
    return num1 + num2
}

const result = add(1,24)
console.log(result)

// variable while using the function known as Argument

function UserLogin(username = "John Doe"){
    if (!username){
        console.log("Please Enter user name");
        return ;
    }
    return `${username} just logged in`;
}
console.log(UserLogin())