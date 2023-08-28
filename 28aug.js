//Loops

//1.For loops
let i = 100;
for (; i > 90; ) {
  console.log(i);
  i--;
}

//an example
const cars = ["alto", "bmw", "volvo"];

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}
//here we can actually output all the values of an array using for loop ,alternatively we have to use
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
//to get the same result ,but using for loop it becomes handy
//now lets dive deeper into the for in loop

//2.For..In loop
for (let x in cars) {
  console.log(cars[x]);
}

//here we actually shorthand the array properties using for..in loop
for (let y in cars) {
  console.log(cars[y]);
}
//x or y is lenght value or working like 'i' which were used in for loop

const carrs = {
  fName: "alto",
  lName: 800,
  model: 2020,
};

for (let x in carrs) {
  console.log(x);
}
for (let x in carrs) {
  console.log(carrs[x]);
}

for (let x of cars) {
  console.log(x);
}

//for..of in string
let words = "abcdef";
for (let x of words) {
  console.log(x);
}

//  While loop
let x = 0;
while (x < 10) {
  console.log(x);
  x++;
}

console.log("hi");
