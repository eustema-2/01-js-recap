// Destructuring
const book = {
  id: 1,
  title: "Neuromante",
  author: "William Gibson",
  pages: 266,
  publicationDate: 2017,
  genres: ["Cyberpunk", "Science Fiction"],
};

// const title = book.title;
// const author = book.author;

const { author, title, ...rest } = book;
// console.log(rest);

const [firstGenre, ...other] = book.genres;
// console.log(other);

// Spread Operator - Deap Copy
const objA = {
  firstName: "Samuele",
};
const objB = { ...objA };
objB.firstName = "Paolo";
// console.log(objB);

// Operatore ternario
const age = 10;
const drink = age >= 18 ? "wine" : "water";
// console.log(drink);

// Short Circuting
// console.log(true && "viene restituita questa stringa" && "prova");
// console.log(false || "viene restituita questa stringa" || false);

// Arrow functions

function calcAge(birthYear) {
  return 2023 - birthYear;
}

const calcAge2 = function (birthYear) {
  return 2023 - birthYear;
};

const calcAge3 = (birthYear) => 2023 - birthYear;

const age3 = calcAge2(1991);
console.log(age3);

// forEach

const students = ["Mario", "Luigi", "Marta"];

students.forEach((elm, i) => console.log(i, elm));

// Filter

const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter((number) => number % 2 === 0);
const studentsPremium = students.filter((student) => student !== "Mario");

console.log(students, studentsPremium);

// Map

const doubledNumbers = numbers.map((number) => number * 2);

console.log(doubledNumbers);

// Fetch

async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    if (!response.ok) {
      throw new Error("Errore nella richiesta");
    }
    const data = await response.json();
    console.log(data);
    // Altre operazioni da eseguire con i dati ottenuti
  } catch (error) {
    console.log("Errore nel recupero dei dati:", error);
  }
}

fetchData();
