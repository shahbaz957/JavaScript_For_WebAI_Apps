// ******************* Return Value of For Each Loop **************************

// Crucial thing to remember is Call Back function has no name 
const coding =  ['js' , 'swift' , 'go' , 'cpp' , 'rust' , 'ruby']
const values = coding.forEach(el => {
    console.log(el)
    return el;
});

console.log(values)

// so this means for each loop does not return any value to any variable

// ****************** Filter Function *********************

/* 
REMEMBER : when you open scope using {} you must explicitly return the value o/w you just put round brackets and value will be explicitly returned
*/

const myNum = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNum.filter((item) => item>4)

const nNums = myNum.filter((item) => {
    return item > 4;
})

console.log(nNums)

const myNewNums = []
myNum.forEach(el => {
    if ( el > 4){
        myNewNums.push(el)
    }
});
console.log(myNewNums)


