console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
const firstName="Anthony";
let lastName="Padgett";
var myAge=24;
let isDone;

// Exercise 2

let fullName= firstName + " " + lastName; // Anthony + " " + "Padgett" => Anthony Padgett
let templateFullName = `${firstname} ${lastName}`;
console.log("fullName: ", fullName);
console.log("templateFullName: ", templateFullName);//

// Exercise 3
let myStory;
let city = "Helena";
let pastime ="fixing stuff, reading, watching sports, staying out my wifes way";

myStory = `My Name is ${fullName}. I live in ${city}. I like ${pastime}`;


console.log(myStory);
