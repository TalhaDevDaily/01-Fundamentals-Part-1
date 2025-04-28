// Variables and Values
const country = "Bangladesh";
const continent = "Asia";
let population = 180000000;

// Data Types
const isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// let, const and var
language = "Bangla";
// continent = "Europe";

// Basic Operators
population /= 2;
population++;
console.log(population);

let finlandPopulation = 6000000;
console.log(population > finlandPopulation);

let averagePopulation = 33000000;
console.log(population < averagePopulation);

const description =
  country +
  " is in " +
  continent +
  " and it's " +
  population +
  " people speak " +
  language;

console.log(description);

// Operator Precedence
