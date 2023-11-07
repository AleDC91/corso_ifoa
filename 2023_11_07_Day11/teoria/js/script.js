// -----------------------------------
// --------INTRODUZIONE A ES6---------
// -----------------------------------

// ----------------------------------
// ---------SPREAD OPERATOR----------
// ----------------------------------

// permette di fare un clone di un oggetto.
// anche di estendere il nuovo oggetto con nuove proprietà o
// sovrascrivere quelle che si stanno clonando.

let arr = [5, 7, 9];
console.log(...arr);
let arr2 = [...arr];
console.log(arr2);

const gatto1 = {
  zampe: 4,
  verso: "miao",
  nome: "Tom",
};

const gatto2 = {
  ...gatto1,
  nome: "Stregatto", // modifico
  paese: "delle meraviglie", // aggiungo
};

console.log(gatto1);
console.log(gatto2);

let obj1 = {
  name: "Mario",
  lastName: "Rossi",
  age: 45,
  city: "Roma",
};

let obj2 = {
  obj1,
  city: "Milano",
};

// ----------------------------------
// ---------REST PARAMETERS----------
// ----------------------------------

// permette di trattare un indefinito numero di parametri di una funzione come un array
// hanno la stessa funzione dell'oggetto predefinito 'arguments', ma gli do io un nome;

function somma(...numeri) {
  // codice
}

function func1(...args) {
  // posso chiamarlo come voglio, ma di solito è args
  console.log(args);
}

func1(1, 3, 12, 44); // output -> [1, 3, 12, 44]

function func2(...args) {
  console.log(args[1]);
}

func2(1, 3, 12, 44); // output -> 3

func1(arr); // output -> [[5, 7, 9]]  array bidimensionale
func1(...arr); // output -> [5, 7, 9] prima scarta arr, poi ci rimette le parentesi

// ----------------------------------
// -------DESTUCTURING OPERATOR------
// ----------------------------------

// permette di estrarre valori da oggetti o da array e inserirli direttamente
// in nuove variabili o costanti. codice piu chiaro e pulito

// SINTASSI VECCHIA
// const persona = {
//     nome: 'Aldo',
//     cognome: 'Baglio',
//     eta: 20
// }
// const nome = persona.nome;
// const cognome = persona.cognome;
// const eta = persona.eta;

// CON DESTRUCTURING OPERATOR
const persona = {
  nome: "Aldo",
  cognome: "Baglio",
  eta: 20,
};
const { nome, cognome, eta } = persona;

// DESTRUTTURAZION DI UN ARRAY
// di solito si fa con quegli array che si ripresentano sempre nello stesso modo
// altrimenti usa bracket notation
const arr3 = [7, 4, 3];
let [x, y, z] = arr3; // L'ORDINE È IMPORTANTE!
console.log(x, y, z);

// ----------------------------------
// --------TEMPLATE LITERALS---------
// ----------------------------------

// permette scittura di testo su piu righe.
// utile per string interpolation
// usa i backticks ``

const testo = `Ciao ciao 
io mi chiamo 
${persona.nome}
e ho
${persona.eta} anni`;

console.log(testo); // va a capo quando è specificato in 'testo'

// ----------------------------------
// --------METODI DI STRINGHE--------
// ----------------------------------

str = "ciao sono una super stringa";

console.log(str.startsWith("ciao"));
console.log(str.startsWith("hola"));

console.log("--------------------");

console.log(str.startsWith("stringa"));
console.log(str.startsWith("hola"));

console.log("--------------------");

console.log(str.includes("stringa"));
console.log(str.includes("hola"));
console.log(str.includes("super"));

console.log("--------------------");

// ----------------------------------
// ---------METODI DI ARRAY----------
// ----------------------------------
//  splice è molto potente

const arrMethod = [1, 4, 6, 54, 23, 98, 2, 2333, 43];
let arrMod = arrMethod.splice(2, 3, 999999999);
console.log("Nuovo array: " + arrMethod);
console.log("Dati eliminati con splice: " + arrMod);

// concat restituise un nuovo array, non modifica quelli su cui lavora

// spread operator per concatenare gli array;

let arr4 = [1, 2, 3, "ciao", true, { a: 1, b: 2, c: 55 }];
let arr5 = [65, false, false, "ginoginetto", 43.3, 23, null, null, true];
let sumArr = [...arr4, ...arr5];
console.log(sumArr);

// SLICE()
// non è splice!
// restituisce porzione di array
// non scassa l'array di partenza, ma ne 'copia una porzione'
let sliceArr = arr4.slice(3, 5);

console.log(arr4);
console.log(sliceArr);
console.log(arr4);

// ----------------------------------
// ------ITERAZIONE DEGLI ARRAY------
// ----------------------------------

let altroArray = ["uno", "due", "tre", "quattro", "cinque"];

// iterazione con ciclo for:
for (let i = 0; i < altroArray.length; i++) {
  console.log(altroArray[i]);
}

// FORIN()
// -------

// iterazione col metodo forIn:
// per array e objects
// come for ma piu compatto
// key prende le chiavi dell'array
// invece di i usa key, che psso comunque cambiare

for (const key in altroArray) {
  console.log(key + ": " + altroArray[key]);
}

// esempio con oggetto
for (const key in persona) {
  console.log(key);
}

// FOROF()
// -------

for (const value of arr) {
  console.log(value);
}

// per gli oggetti, (preso da chatGPT, vai a controllare su docs)
const entries = Object.entries(persona);

for (const [key, value] of entries) {
  console.log(key + ": " + value);
}

// FOREACH
// -------

// usa le arrow function
// richiama una funzione per ogni cco

function callFunc(val) {
  console.log(val);
}

altroArray.forEach(callFunc);

console.log("---------------");

altroArray.forEach(function (val) {
  // qui dichiaro e chiamo la variabile dentro il ciclo
  console.log(val);
});

console.log("---------------");

// meglio usare funzioni anonime o arrow functions direttamente come argomento di forEach(). NON SPORCO L'AMBIENTE!
altroArray.forEach((val) => console.log(val));
//  se ho un secondo parametro nella callback, questo è l'indice
altroArray.forEach((val, index) => console.log(val, index));

//  forEach non ritorna nulla!!!!

//   MAP
// -------

// modifica ogni elemento di un array, ritorna un array!!!
// non modifica l'elemento di partenza

newArrMap = arr5.map((val) => val + "!!!");

console.log(arr5);

console.log(newArrMap);

let arrr = [1, 2, 3, 4];

let arrr2 = arrr.map((val) => val + 1);
console.log(arrr);
console.log(arrr2);

// FILTER
// ------

// filtra un array  in base ad una condizione e ritorna un nuovo array filtrto

let arrr3 = [1, 5, 10, 7, 2, 12];

let arr3Filt = arrr3.filter(ele => ele > 5);
console.log(arrr3);
console.log(arr3Filt);



// REDUCE
// ------

// manipola tutti i valori di un array di tipo numerico e restituisce un unico valore

let arrReduced = arrr3.reduce((total, current) => total + current, 0); // lo zero è il valore da cui partire
// total si chiama accumulatore, per salvare il valore della somma precedente
// current, valore corrente di ogni ciclo
// 0 è il valore iniziale dell'accumulatore.
// se voglio fare un mltiplicazione, la faccio partire da 1.
console.log(arrReduced);

// REDUCERIGHT
// -----------
// come reduce ma parte da dx



// EVERY
// -----
// restituisce true o false a seconda se TUTTI gli elementi soddisfano una condiizione

let everyEle = arrr3.every(ele => ele > 0);
console.log(everyEle);
let everyEle2 = arrr3.every(ele => ele > 5);
console.log(everyEle2);


// SOME
// ----
// restituisce true o false a seconda se ALCUNI gli elementi soddisfano una condiizione

let someEle = arrr3.some(ele => ele > 0);
console.log(someEle);
let someEle2 = arrr3.some(ele => ele > 5);
console.log(someEle2);


// INDEXOF
// -------
// restituisce indice dell'elemento tra parentesi

let indexArr = arrr3.indexOf(10);
console.log(indexArr)



// FIND e FINDINDEX
// ----------------

let arrUser = [
    {
        id: 1,
        nome: 'Mario',
        cognome: 'Rossi',
        eta: 22,
        citta: 'Roma'
    },
    {
        id: 2,
        nome: 'Giuseppe',
        cognome: 'Verdi',
        eta: 30,
        citta: 'Milano'
    },
    {
        id: 3,
        nome: 'Francesca',
        cognome: 'Neri',
        eta: 27,
        citta: 'Napoli'
    },
]

let user = arrUser.find( u => u.id === 3);
console.log(user); // se non trova elemento restituisce UNDEFINED

let index = arrUser.findIndex( u => u.nome === 'Francesca');
console.log(index); // se non c'è, restituisce -1