//1.ForEach method-doesnot return a new array, only for logging values in our programme or say side effects.now to get output as well and getting a new array we have map methos

let pen = [1, 2, 3, 4, 5];
let newValue = pen.forEach(myFunction);
// console.log(pen);
function myFunction(output) {
  //   return output * 2;
  console.log(output * 2);
}
// console.log(newValue);--gives undefined because forEach method doesnot return a new array unlike map method

//2.map()

pen = [1, 2, 3, 4, 5];
newValue = pen.map(myFunction1);
// console.log(pen);
function myFunction1(output) {
  return output * 2;
}
console.log(newValue); //gives new array,if we do the same in forEach it shows undefined

//3.flatMap
pen = [1, 2, 3, 4, 5];
let doubleAndSquare = pen.flatMap(myFunction2);

function myFunction2(output) {
  return [output * 2, output * output];
}
console.log(doubleAndSquare); //make a new array instead of creating array into array which does in basic

//4.filter() method -create a new array who pass the test.lets c how
pen = [1, 2, 3, 4, 5];
output = pen.filter(myFunction3);

function myFunction3(value) {
  return value > 2;
}
console.log(output); //new array of 3,4,5 as key element

//5.reduce() method--it basically use a function as a parameter,takes 2 arguments and do an operation with the array element and provide an output (single output,not array or else)
pen = [1, 2, 3, 4, 5];
let doMinus = pen.reduce(myFunction4);

function myFunction4(a, b) {
  return a - b;
}
console.log(doMinus); //gives -13 as answer(how 1-2-3-4-5)

//6.reduce() method works from left to right while doing operations with array elements .now to perform operations from right to left we must use reduceRight method.

pen = [1, 2, 3, 4, 5];
output = pen.reduceRight(myFunction5);

function myFunction5(a, b) {
  return a - b;
}
console.log(output); //gives -5 (5-4-3-2-1)

//7.Array every method-here we provide the function as argument ,now function perform a task where each element should pass the test ,if all passes return TRUE else FALSE

pen = [1, 2, 3, 4, 5];
newOne = pen.every(myFunction6);

function myFunction6(a) {
  return a > 1;
}
console.log(newOne);

//8.Array some() method--basically in every method ,all element must pass the test to return TRUE otherwise return FALSE.now in some()
let numb = [1, 10, 100, 1000];
let whetherSomePass = numb.some(toPassTest);

function toPassTest(s) {
  return 10 * 3 < s;
}
console.log(whetherSomePass); //gives true,bcs except 1000 every array element pass the test.

//indexOf() method
let positionArray = ["haidar", "jawan", "hero no.1"];
console.log(positionArray.indexOf("jawan"));
console.log(positionArray.indexOf("jawan"));
console.log(positionArray.indexOf("jawan"));
console.log(positionArray.indexOf("hero no.1"));
console.log(positionArray.indexOf("haidar"));

//what is more than once same element is repeated now what-now we use lastIndexOf()  method to get the index of last time it is repeated
let lastPositionOf = [1, 2, 3, 4, 5, 2];
console.log(lastPositionOf[2]);
console.log(lastPositionOf.lastIndexOf(2));

//lets check what find() method does
let firstPositionOf = [1, 2, 3, 4, 5, 2];

let firstPassedElement = firstPositionOf.find(passTheTest);

function passTheTest(p) {
  return p > 2;
}

console.log(firstPassedElement); //3

//indexFind()
firstIndexPositionOf = [1, 2, 3, 4, 5, 2];

firstPassedElement = firstIndexPositionOf.findIndex(passTheTest1);

function passTheTest1(p) {
  return p > 2;
}

console.log(firstPassedElement); //2-index of 3

//from()-make an array out of the string taken as argument
const myArr = Array.from("ABCDEFG");
console.log(myArr);

//js examples
//1.add two numbers
const num1 = 65;
const num2 = 70;
let total = num1 + num2;
console.log("The sum is:" + total);

//or
function mySum(a, b) {
  return a + b;
}
mySum(1, 1);
console.log(mySum(10, 1));

//or

// store input numbers
// const numX = parseInt(prompt("Enter the first number "));
// const numY = parseInt(prompt("Enter the second number "));

// //add two numbers
// const sum = numX + numY;

// // display the sum
// console.log(`The sum of ${numX} and ${numY} is ${sum}`);

//Q3 SQUARE ROOT OF A Number-give NaN if sqrt not possible
function mySquareRoot(inputValue) {
  return Math.sqrt(inputValue);
}
console.log(mySquareRoot(10));
console.log(mySquareRoot(0)); //0
console.log(mySquareRoot(-1)); //NaN-since negative value sqrt not possible
console.log(mySquareRoot("a")); //NaN-since string doesnot provide

//Q4-area of triangle
function myArea(height, base) {
  return (height * base) / 2;
}
myArea(10, 20);
console.log(myArea(10, 20));

//Q5 swap two variable
let a = 10;
let b = 20;
let random = a; //random is 10,a is 10 and b is 20
a = b; //10,20,20
b = random; //10,20,10
console.log(a, b);

//or using destruction method available in es6
let x = 10;
let y = 20;
[x, y] = [y, x];
console.log(x, y);

//using arthmetic operation
a = 100;
b = 200;
a = a + b; //300,100
b = a - b; //300,200
a = a - b; //100,200

//math object and its methods

//..
console.log(Math.round(10.1)); //gives round figures in nearest integer
console.log(Math.round(10.00000001));
//..
console.log(Math.ceil(10.00000001)); //nearest integer but greater than the given

console.log(Math.ceil(9.01)); //10
//..
console.log(Math.floor(9.01)); //9,nearest integer but lesser than the given

//..trun return only integer part of value
console.log(Math.trunc(10.1)); //10 only

//..sign==only meant to state the sign basically
console.log(Math.sign(-4)); //-1 if negative
console.log(Math.sign(0)); //0 if 0
console.log(Math.sign(4)); //1 if positive

//..power method to get power
console.log(Math.pow(2, 2));
console.log(Math.pow(2, 3));
console.log(Math.pow(2, 4));

//.. sqrt
console.log(Math.sqrt(4));
console.log(Math.sqrt(9));
console.log(Math.sqrt(16));
console.log(Math.sqrt(25));
console.log(Math.sqrt(36));
console.log(Math.sqrt(64));
console.log(Math.sqrt(81));

//..abs()-provide absolute value=-if negative return postive(absolute means postive)
console.log(Math.abs(-10.1));

//sin() for sin value of given nput
//cos()

//..Max() and Min()

console.log(Math.min(10, 10, 10, 20, 0)); //tells the minimum of given arguments
console.log(Math.max(10, 100, 100)); //100

//..random
console.log(Math.random()); //generate random number

//.log( x) to get logirithm of x

//.log2() to get log value when base 2
//.log10() when base 10
