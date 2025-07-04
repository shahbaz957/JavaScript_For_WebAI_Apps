// ************************* Lexical Scoping ***************************

function one() {
  const username = "Shahbaz";
  function two() {
    const platform = "Udemy";
    console.log(username);
  }
  // console.log(platform) // Out of scope error
  two();
}
one();

// ****************** Interesting ************************

console.log(addone(3));

// this type of function is accessed before its declearation but must be this function declared

function addone(num) {
  return num + 1;
}

console.log(addTwo(4)); // it returns an error while it dont because of the concept of hoisting

const addTwo = function (num) {
  return num + 2;
};
