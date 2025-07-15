class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`UserName is : ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, subject) {
    super(username);
    this.email = email;
    this.subject = subject;
  }

  addCourse() {
    console.log(`New course is added by ${this.username}`);
  }
}

const userOne = new Teacher("Shahbaz", "shahbaz@openai.com", "Full Stack AI");
/// so we have access to userame through Teacher class which inherits the User
userOne.addCourse();
