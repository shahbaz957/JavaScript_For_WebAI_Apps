// ******************** Date **********************
let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());

let myCreateddate = new Date(2021 , 2,15 , 5 , 23);
console.log(myCreateddate.toLocaleString())

let my = new Date("2011-02-23");
console.log(my)

console.log(Math.floor(Date.now()/1000) + " sec")

console.log(myCreateddate.getTime())
let newDate = new Date(); // Create a Date object
newDate = newDate.toLocaleString('default', {
    weekday: "short"
});
console.log(newDate);



