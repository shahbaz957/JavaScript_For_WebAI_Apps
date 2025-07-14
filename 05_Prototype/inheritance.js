const teacher = {
    makeVideos : true
}

const teachingSupport = {
    isAvailable : false
}

const TA = {
    course : "JavaScript",
    __proto__ : teachingSupport // in this way we inherit the properties of one class into another
}

// Modern Syntax

Object.setPrototypeOf(teachingSupport , teacher)

// this is jis ne call kia so this is refering to jis ne call kia

const name = "Shahbaz      "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.trim().length}`)
}

name.trueLength()
