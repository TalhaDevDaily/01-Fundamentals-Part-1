//// Variables and Values
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

//// let, const and var
language = "Bangla";
// continent = "Europe";

//// Basic Operators && Strings and Template Literals
population /= 2;
population++;
console.log(population);

let finlandPopulation = 6000000;
console.log(population > finlandPopulation);

let averagePopulation = 33000000;
console.log(population < averagePopulation);

const description = `${country} is in ${continent}, and its ${population} people speak ${language}`;

//// Taking Desicions: if / else Statements
let populationComparison;
if (averagePopulation > population) {
  populationComparison = `below`;
} else {
  populationComparison = `above`;
}

console.log(
  `${country}'s population is ${population} ${populationComparison} avarage`
);

//// Type Conversion and Coercion
console.log("9" - "5"); // 4
console.log("19" - "13" + "17"); // 617
console.log("19" - "13" + 17); // 23
console.log("123" < 57); // false
console.log("123" < 570); // true
console.log(5 + 6 + "4" + 9 - 4 - 2); // 1143
console.log(3 + +"3"); // 6
console.log(3 + Number("3")); // 6
console.log(typeof 3 + ""); // Unary version of String(3)

/*
//// Equality Operators: == vs ===
const numNeighbours = Number(
  prompt(`How many neighbour countries does your country
have?`)
);
if (numNeighbours === 1) console.log(`Only ${numNeighbours} border!`);
else if (numNeighbours > 1) console.log(`More than 1 border`);
else console.log(`No borders`);
// Using === strict equality helped check if both the value and the data type are number and numeric 1 respectively, where as the loose equality wasn't checking if the data type was a number or not, it was just making sure to validate the string '1' into the right answer no matter it's data type.
// Converting the data type into number using Number() function helped as both the data type and the value is a numeric, which help along side with the strict equalitys' === validation.
*/
