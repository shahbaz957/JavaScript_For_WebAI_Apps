const clock = document.getElementById('clock')
console.log(clock)
const date = new Date()
console.log(date.toLocaleTimeString())

// console.log(setInterval(date))
setInterval(() => {
    const date = new Date()
    // console.log(date.toLocaleTimeString())
    clock.innerHTML = date.toLocaleTimeString()
}, 1000);