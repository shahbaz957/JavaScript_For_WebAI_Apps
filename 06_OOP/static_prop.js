// you use the static method when you dont want a particular fucntion defined int the class to access outside the class

class User{
    constructor(username , email) {
        this.username = username
        this.email = email
    }
    static logMe(){
        return `User is Logged in : ${this.username}`
    }
}

const userOne = new User("James Bond" , '007@wym.com')

console.log(userOne.logMe()) // so this is not accessible outside the class

