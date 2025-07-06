// ************************* Reduce ****************************

const arr = [1,2,3,4,45,5]
const init = 0
const sum1 = arr.reduce(function (acc , currval){
    console.log(`acc -> ${acc} and curr -> ${currval}`)
    return acc + currval
},0)
const sum = arr.reduce(
    (acc , curr) => acc + curr,
    init
)
console.log(sum)    
console.log(sum1)

const shoppingCart = [
    {
        course : "JS",
        price : 1200
    },
    {
        course : "C++",
        price : 1000
    },
    {
        course : "Rust",
        price : 12000
    },

]
const priceToPay = shoppingCart.reduce((acc , item) => item.price + acc , 0)
console.log(priceToPay)