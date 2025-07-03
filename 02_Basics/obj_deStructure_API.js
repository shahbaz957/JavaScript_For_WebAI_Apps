// Destructuring

const course = {
    name : "AI Agents",
    price : 999,
    instructor : "Shahbaz"
}

const {instructor : ins} = course;    

// extracting instructor property from an course object this is known as object destructuring 

console.log(ins)

// *********************** API *******************************
// mostly you recieve data in the format of json 

{
    "name" : 'shahbaz',
    "age" : 18,
    "isLoggedIn" : true
}