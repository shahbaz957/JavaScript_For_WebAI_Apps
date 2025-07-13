const promiseOne = new Promise(function (resolve, reject) {
  // async operation do here
  setTimeout(function () {
    console.log("Async function is executed");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("I consumed the promise");
});

const promiseTwo = new Promise(function (resolve, reject) {
  setTimeout(function () {
    const error = false;
    if (!error) {
      resolve({ name: "Shahbaz", age: 18 });
    } else {
      reject("ERROR : Occured An Error");
    }
  }, 1000);
});

promiseTwo
.then(function(user){
    return user.name
})
.then(function(username){
    console.log(username)
})
.catch(function(error){
    console.log(error)
})
