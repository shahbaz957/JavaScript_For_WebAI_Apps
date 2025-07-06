const myNum = [1,2,3,4,5,6];
const num_arr = myNum.map((item) => item + 10) 

// here you are modifying the copy of original array not the original one 

console.log(num_arr)

myNum.forEach((el , idx , arr) => {
    arr[idx] = el + 10 ;
});
console.log(myNum)

// Chaining Method

const newNum = myNum
            .map((item) => item * 10)
            .map((item) => item + 1)
console.log(newNum)