// ******************** 2nd Part ********************

const TinderUser = {};
TinderUser.id = "123abd"
TinderUser.name = "Jack"
TinderUser.isLoggedIn = true
console.log(TinderUser)

// Nested Objects

const RegularUser = {
    email : "Shahbaz@gmail.com",
    name : {
        userFullname : {
            firstName : "Shahbaz Ali ",
            lastName : "Baig"
        }
    }
}
console.log(RegularUser.name.userFullname.lastName)

// Concatenating two or more objects

const obj1 = { 1 : 'a' , 2 : 'b'}
const obj2 = {3 : "a" , 4 : 'b'}
// const obj3 = Object.assign({} , obj1 , obj2)


// this {} consider as targeted object means all the objects are concatenated in thsi object if you dont give this then they all concatenated in the first given object

// Concatenation using Spread Method

const obj3 = {...obj1 , ...obj2}
console.log(obj3)

// data return from the database may be in the form of array of different objects

console.log(Object.keys(TinderUser))
console.log(Object.values(TinderUser))
console.log((Object.entries(TinderUser)).length)
console.log(TinderUser.hasOwnProperty('isLoggedIn'))
