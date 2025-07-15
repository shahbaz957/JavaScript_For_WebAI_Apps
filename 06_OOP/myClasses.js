/// Classes are just the syntactical sugar in js all the work is basically done by prototypial nature of js

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  encryptPassword() {
    return `${this.password}abc`;
  }
  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const chai = new User("Shahbaz", "MSB@gmail.com", "123");

console.log(chai.changeUsername());

// Behind the Scene Working

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};

const tea = new User("tea", "ABC@gmail.com", "123");
console.log(tea.encryptPassword());
