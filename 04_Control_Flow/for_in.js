// for of loop does not apply on objects so for objects we use for in loop  i

const myObj = {
    game : "NFS",
    game2 : "SpiderMan"
}
for (const key in myObj) {
    // console.log(key)
    // console.log(myObj[key])
}
const array = ['shahbaz', 'ali' , 'baig']
for (const key in array) {
    console.log(array[key])
}

// we cannot apply for in loop on map functions because maps are not iterable
const map = new Map()
map.set("Name" , "Shahbaz")
map.set("Name" , "Hassan")
for (const key in map) {
    console.log(key)
}