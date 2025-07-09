const buttons = document.querySelectorAll('.button')
// console.log(buttons)
// foreach loop is legitimate on NodeList (very important component in term of DOM manipulation)
const body = document.querySelector('body')
buttons.forEach(function(button){
    // console.log(button)
    button.addEventListener('click' , function(e){
        console.log(e)
        console.log(e.target)
        console.log(e.target.id)
        switch (e.target.id) {
            case "grey":
                body.style.backgroundColor = e.target.id
                break;
            case "yellow":
                body.style.backgroundColor = e.target.id
                body.style.color = "black"
                break;
            case "purple":
                body.style.backgroundColor = e.target.id
                break;
            case "red":
                body.style.backgroundColor = e.target.id
                break;
        
            default:
                break;
        }
    })
})