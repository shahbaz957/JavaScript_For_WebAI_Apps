const coding = ['js' , 'swift' , 'go' , 'cpp' , 'rust' , 'ruby']

coding.forEach(element => {
    console.log(element)
});

coding.forEach(function (element) {
    console.log(element)
});

function printMe(item){
    console.log(item);
}

coding.forEach(printMe);
// const sq = (num) => {
//     console.log(num**2)
// }
// sq(2)
coding.forEach((el , idx , arr) => {
    console.log(el , idx , arr)
    
});

const myCodingObj = [
    {
        language : "Javascript",
        languageFileName : "js"
    },
    {
        language : "Python",
        languageFileName : "py"
    },
    {
        language : "C++",
        languageFileName : "cpp"
    },
    {
        language : "C",
        languageFileName : "c"
    }
]
myCodingObj.forEach(element => {
    console.log(element.language)
});