// Modern Syntax

class User {
    constructor(name , password) {
        this.name = name 
        this.password = password
    }
    get password(){
        return `${this._password}Shahbaz`
    }
    set password(value){
        this._password = value
    }
}

const userOne = new User("Shahbaz" , "abc")
console.log(userOne.password)