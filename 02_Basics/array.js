// ***************************** Array *********************************
const array = [1,2,3,4,5]
console.log(array)

const arr2 = new Array(1,2,3,4)

console.log(arr2[2])

// ************************* Methods in Array **************************

arr2.push(6)
arr2.pop()
arr2.unshift(3)
arr2.shift()
console.log(arr2)

console.log(arr2.includes(5))
console.log(arr2.indexOf(4))

const newArr = arr2.join()
console.log(typeof newArr)

// Slice and Splice 
console.log("A --> ", arr2)
const arr1 = arr2.slice(1,3)
console.log("B --> " , arr1)

const arr3 = arr2.splice(1,3)
console.log(arr3)
console.log(arr2)

// splice include the range which slice does not do and also splice manipulate the original array
