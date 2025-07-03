function calCartPrice(val,...num){ // ... is the REST operator
    const arr = [val , ...num] // ... is the spread operator
    return arr
}

console.log(calCartPrice(200,300,400,500))

const obj = {
    name : "Shahbaz",
    age : 18
}
function call(object){
    console.log(`${object.name} just come on our platform`)
}

call(obj)

function array(getArr){
    return getArr[1];
}
const arr = [1 , 2,4,5]
console.log(array(arr))