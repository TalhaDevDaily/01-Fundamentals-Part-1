/*
//// Variables and Values
let js = "amazing";
if (js === "amazing") alert("Javascript is FUN!");

console.log(40 + 8 + 23 - 10);
console.log(23);

let firstName = "Jesus";
console.log(firstName);
console.log(firstName);
console.log(firstName);
*/

/*
//// Data Types
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Jesus Christ");

javascriptIsFun = "Yeas!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);
console.log(typeof null);
*/

/*
//// let, const and var
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = "programmer";
job = "teacher";
console.log(job);

lastName = "Christ";
console.log(lastName);
*/

/*
//// Basic Operators

// Math Operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
//  2 ** 3 means 2 to the power^ of 3 = 2 * 2* 2

const firstName = "Jonas";
const lastName = "Schmedthmann";
console.log(firstName + " " + lastName);

// Assignment Operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x /= 2; // x = x / 2 = 50
x -= 10; // x = x - 10 = 40
x++; // x = x + 1 = 41
x--; // x = x - 1 = 40
console.log(x);

//// Comparison Operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
*/

/*
//// Operator Precedence
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/

/*
//// Strings and Template Literals
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";

console.log(jonas);

// Template Literals/ Template Strings
const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;

console.log(jonasNew);

console.log(`Just a regular string...`);

console.log(`String
    multiple
lines`);
*/

/*
//// Taking Decisions: if / else Statements
const age = 15;
const isOldEnough = age >= 18;

if (age >= 18) {
  console.log("Sarah can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too yourng. Wait another ${yearsLeft} years :)`);
}

// Variable inside of a code block will not execute outside of the code block
const birthYear = 2012;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/

/*
//// Type Conversion and Coercion
// Type Conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jesus"));
console.log(typeof NaN);

console.log(String(23), 23);

// Type Coercion
console.log("I am " + 23 + " years old");
console.log(`I am ${23} years old`);
console.log("I am " + "23" + " years old");
// they all work like this
console.log("I am " + String(23) + " years old");

console.log("23" + "10" + 3); //23103
console.log("23" - "10" - 3); // 10

console.log("23" * "2"); // 46
console.log("23" / "2"); // 11.5

let n = "1" + 1;
n = n - 1;
console.log(n); // 10

console.log(2 + 3 + 4 + "5"); // 95
console.log("10" - "4" - "3" - 2 + "5"); // 15
*/

/*
//// Truthly and Falsly Values
// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));
console.log(Boolean(``));

const money = 0;
if (money) {
  console.log(`Don't spend it all ;)`);
} else {
  console.log(`You should get a job!`);
}

let height; // even if you put height = 0
if (height) {
  console.log(`YAY! Height is defined`);
} else {
  console.log(`Height is UNDEFINED`);
}
*/

/*
//// Equality Operators: == vs ===
const age = `18`;
if (age === 18) console.log(`You just became an adult :D (strict)`); // False
if (age == 18) console.log(`You just became an adult :D (loose)`); // True

const favourite = Number(prompt(`What's your favourite number?`));
console.log(favourite); // 23 === 23 = true | 22 === 23 = false
console.log(typeof favourite);

if (favourite === 23) console.log(`Cool! ${favourite} is an amazing number!`);
else if (favourite === 7) console.log(`${favourite} is also a cool numer!`);
else if (favourite === 9) console.log(`${favourite} is also a cool numer!`);
else console.log(`Number is not 23 or 7 or 9`);

if (favourite !== 23) console.log(`Why not the 23?`);
*/

/*
//// Logical Operators
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) console.log("Sarah is able to drive!");
// else console.log(`Someone else should drive...`);

// const isTired = !true; // C
const isTired = false; // C
// console.log(isTired);
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired)
  console.log("Sarah is able to drive!");
else console.log(`Someone else should drive...`);
*/

/*
//// The switch Statement
const day = "monday";

switch (day) {
  case "monday": // day === 'monday'
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log(`Prepare theory video`);
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :D");
    break;
  default:
    console.log(`Not a valid day!`);
}

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log(`Prepare theory video`);
} else if (day === "wednesday" || day === "thursday") {
  console.log(`Write code examples`);
} else if (day === "friday") {
  console.log(`Record videos`);
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend :D");
} else {
  console.log(`Not a valid day!`);
}
*/

//// The Coditional (Ternary) Operation
const age = 23;
// age >= 18
//   ? console.log("I like to drink wine 🍷")
//   : console.log("I like to drink water 💧");

const drink = age >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water 💧";
}

console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);
