// Object Based Getter and Setter methods by defining Object
const User = {
    _email : "s@msb.com",
    _password : "abc",
    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}

const newUser = Object.create(User)
console.log(newUser.email)