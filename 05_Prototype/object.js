// Function is function as well as object
// because of the prototypal nature of js it always try to access parent element , parent to parent element untill it finds null

function multiple(num) {
  return num * 5;
}

multiple.prototype.increment = function(){
  this.num++;
}
multiple.power = 5;
console.log(multiple(5));
console.log(multiple.power);
console.log(multiple.prototype);

function createUser(username, score) {
  this.username = username;
  this.score = score; // this keyword here is refering to current context
  // roughly speaking this means jis is used to provide the context wrt to all the instances that are made on the top of this function(object)
}

createUser.prototype.increment = function(){ // injecting our own methods in the prototype of function Custom methods
    this.score++ // again this is for the current context refering
}

createUser.prototype.printMe = function(){
  console.log(`Score : ${this.score}`)
}
const userOne = new createUser("Shahbaz", 109);
const userTwo = new createUser("Nouman", 99); // this new keyword provide the context or information of all new methods that are injected in the prototype of the function 

console.log(createUser.prototype)
console.log(userOne.printMe())
