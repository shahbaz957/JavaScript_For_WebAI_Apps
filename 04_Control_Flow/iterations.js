// For Loop
for (let i = 0; i < 10; i++) {
    console.log(i);
    
}
let array = ["shahbaz" , 'ali' , 'baig' , 'is ' , 'a' , 'good' , 'bouy']
for (let index = 0; index < array.length; index = index + 1) {
    const element = array[index];
    console.log(element)
}
for (let index = 0; index < 10; index++) {
    if (index == 5){
        console.log("Lucky Number is detected")
        break;
    }
    console.log(index)
    
}