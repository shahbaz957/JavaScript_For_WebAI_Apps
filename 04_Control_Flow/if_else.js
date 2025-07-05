// ******************* If ***************************
if (true){
    console.log("hellow")
}

const balance = 100;
if (balance >400) console.log("Rich") , console.log("Test of Scope");
else{
    console.log("Poor")
}

const isLoggedIn = true;
const debitCardInfo = false;

if (isLoggedIn & debitCardInfo){
    console.log("You are eligible for course purchasing")
}else if (isLoggedIn){
    console.log('Please enter debit card information')
}else{
    console.log("You are eligible")
}
