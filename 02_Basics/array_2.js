// ****************** Array ********************
const marvel = ["thor" , "hulk"]
const dc = ["Flask" , "WonderWoman"]
// marvel.push(dc)
// console.log(marvel)
// console.log(marvel[2][1])

const allHeroes = marvel.concat(dc)
console.log(allHeroes)

// Doing By Spread Method

const all_new = [...dc , ...marvel]
console.log(all_new)

// Flattening of An Array 
const array = [1,2,4, [2,9,7] ,3,2,[9,0,7,[3,1]]]

const new_array = array.flat(Infinity)
console.log(new_array)

console.log(Array.isArray("Shahbaz"))
console.log(Array.from("Shahbaz"))
console.log(Array.from({name : "Shahbaz"})) // returns an empty array Interesting 

const s1 = 100 ; s2 = 200 ; s3 = 300;
console.log(Array.of(s1,s2,s3))
