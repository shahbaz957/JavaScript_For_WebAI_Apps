
// ************************ Practice ************************

const arr = new Array(1,2,3,4);
console.log(typeof arr);

const arr1 = [1,2,3,4,5];
console.log(typeof arr1);
arr.unshift(3);
arr.shift();
console.log(arr);

const newArr = arr.join(); // it will return a string

console.log(newArr)
console.log(typeof newArr) // it is string cuz you use join method
console.log(typeof arr1)
console.log(typeof arr) // it will return an object

console.log("Array 1 --> " , arr1)
const arr1_a = arr1.slice(1 , 3)
console.log("Slicing Array --> " , arr1_a)

const arr1_b = arr1.splice(1,3);
console.log("Original Array --> " , arr1)
console.log("Splice Array --> " , arr1_b)