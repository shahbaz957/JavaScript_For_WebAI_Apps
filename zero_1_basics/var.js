const accountId = 45342    // this is how we lock the value so that no one can change it
let accountEmail = "shahbaz@email.com"
var accountPassword = "12345"
accountCity = "sheikhupura"    // not a good way of declaring variable


let accountState;
// accountId = 2 // this cannot be possible
console.log(accountId);

accountEmail = "me@email"
accountPassword = "345"
accountCity = "lahore"

/*
Prefer not to use var keyword
because of it issue in block scope and functional scope
*/

console.table([accountEmail , accountCity , accountPassword , accountState])