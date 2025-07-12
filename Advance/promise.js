const promiseOne = new Promise(function (resolve, reject) {
  // Async Task
  setTimeout(function () {
    console.log("Async task is completed");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise is consumed");
});

// Second Way to create a Promise
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async Task is completed");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Promise is consumed");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "shahbaz", email: "Shahbaz@email.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  // user is the parameter that is used for recieving the data after the resolving the promise by Promise Instant
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    const error = false;
    if (!error) {
      resolve({ username: "shahbaz", email: "Shahbaz@email.com" });
    } else {
      reject("ERROR : Some Error has been occured");
    }
  }, 1000);
});

promiseFour
  .then(function (userObj) {
    // Resolving Purpose
    console.log(userObj);
    return userObj.username;
  })
  .then(function (user) {
    console.log(user);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    // This will always executed
    console.log("Promise either rejected or resolved");
  });

// ******************************* JS in Backend ************************************ //
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    const error = false; // think it like a network connection or database connection
    if (!error) {
      resolve({ username: "shahbaz", email: "Shahbaz@email.com" });
    } else {
      reject("ERROR : Some Error has been occured");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();

// *********************** Original Use Case ******************************

async function getAllusers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getAllusers();

// Doing by promise Method

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

// No need to apply async and await becasue all the functions are Chainable (i mean Thenable) second thing occur only when the first thing execute completely
