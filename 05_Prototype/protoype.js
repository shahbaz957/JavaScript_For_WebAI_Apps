const myHeros = ['thor' , 'wonderWoman']

const myHerosObj = {
    thor : "hammer",
    spiderMan : "sling"
}

Object.prototype.allObj = function(){
    console.log("This property is present in all the objects")
}
// so we know all the structure in js are basically objects so when you give object a new property it will be inherited to all its children 

//BUT

Array.prototype.arrProp = function(){
    console.log("This is just the property of Array not the Object")
}

// console.log(myHerosObj.allObj())
// console.log(myHeros.allObj()) 


myHeros.arrProp()
// myHerosObj.arrProp() // this will give you an error
 