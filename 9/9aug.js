// Boolean

let a = 9 > 0;
console.log(a);

console.log(Boolean(0 > 1));

console.log(1 > 2);

//how comparison provides boolean value

console.log(Boolean(1)); //any nonzero number is true
console.log(Boolean(-10)); //any nonzero number is true
console.log(Boolean(0)); //any zero gives false value
console.log(Boolean(-0)); //any negative zero gives false value
console.log(Boolean("")); //empty strng is false
console.log(Boolean("a")); //nonempty string is true
console.log(Boolean("false")); //nonempty string is true
console.log(Boolean(1 + 2 + 3)); //any expression is true
let x;
console.log(Boolean(x)); //any undefined is false
let y = null;
console.log(y); //null is false anyday
let z = NaN;
console.log(z); //NaN is false anyday

//boolean as an object
let p = false; //typeof boolean
let q = new Boolean(false); //typeof object

//Comparison of different data types basically provides different result letc why
console.log(2 < 12);
console.log(2 < "12"); //now basically it gives true why here js engine converted the string 12 into number
console.log(2 > ""); //true because empty string is converted by  js engine to number=0 and 2 is greater than 0 as usual.

console.log("2" < "12"); //false why because of the alphabetically t is greater than o
