console.log(2 > 1)
console.log(2 < 1)
console.log(2 >= 1)
console.log(2 <= 1)
console.log(2 == 1)
console.log(2 != 1)

console.log(null > 0);  // 1
console.log(null == 0); // 2
console.log(null >= 0); // 3

// ***** Results are different just because null operator works differently with equality checker == and comparison operators in case of comparison operator javascipt interpreter convert null into zero that is why output in 1 is False and 3 is True while 2 statement will always remain False

// === this is known as strict checker as it also check the datatype and donot convert the datatypes

console.log("2" == 2);
console.log("2" === 2);