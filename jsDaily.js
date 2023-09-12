//conditional operators

//1.if
// if (condition) {
//   code to execute
// }

let hour = 12;
if (hour < 18) {
  console.log("Good Day");
}

//if-else make it more conditional and appropiate to use

let hours = 1;
if (hours < 12) {
  zone = "its morning";
} else {
  zone = "its noon";
}
console.log(zone);

//if else if for more conditions to operator

let hourss = 20;
if (hourss < 12) {
  zone = "its morning";
} else if (hourss < 16) {
  zone = "its noon";
} else {
  zone = "its evening";
}
console.log(zone);

// better example
let text;
if (Math.floor(Math.random() * 10) < 5) {
  text = "<a href='https://w3schools.com'>Visit W3Schools</a>";
} else {
  text = "<a href='https://wwf.org'>Visit WWF</a>";
}
console.log(text);

//switch statment

// syntax
// switch (expression) {
//   case x:
//     // code block
//     break;
//   case y:
//     // code block
//     break;
//   default:
//   // code block
// }

//example
switch (Math.trunc(Math.random() * 8)) {
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  case 7:
    day = "Sunday";
    break;
  default:
    day = "wrong input";
}
console.log(day);

// break used to stop the execution of switch block after its matches
//default is not necessary to use,but as a good programmer we should
//default isnot necessary to put in last but make sure while using before the last case we should use break statment
//if switch condition matches with more than one case it output only the first match case
//switch inherently uses strict comparison so make sure type also matches with value
//for example
let x = "0";
switch (x) {
  case 0:
    text = "Off";
    break;
  case 1:
    text = "On";
    break;
  default:
    text = "No value found";
}
console.log(text);
// since no matches we will get default output

//Topic-break and continue keyword
//1.Break-it loops out the execution or to say when u reach a certain condition in the loop execution it will stop to execute ,for example

for (i = 0; i < 10; i++) {
  console.log("Hello");
}

//it simpli iterate hello for 10 times,now we want to iterate for only 4 times then
for (i = 0; i < 10; i++) {
  if (i === 4) {
    break;
  }
  console.log("Hello");
}
//here till i===2 for loop execute but when i becomes 4 its stop the loop and no more execution for i=5,6,7,8,9

//2.CONTINUE KEYWORD
//it only break one iteration which u put in condition and loop execution occurs for other conditions
for (i = 0; i < 10; i++) {
  if (i === 4) {
    continue;
  }
  console.log("Hello");
}
//here hello return for 9 times and skip when i was being 4

// iteration over string,array
let name = "yogesh";
for (x in name) {
  console.log(x);
}
name = "yogesh";
for (x in name) {
  console.log(name[x]);
}
name = "yogesh";
for (x of name) {
  console.log(x);
}

const my = ["a", "b", "c", "d"];
for (x in my) {
  console.log(x);
}
const my1 = ["a", "b", "c", "d"];
for (x in my1) {
  console.log(my1[x]);
}
