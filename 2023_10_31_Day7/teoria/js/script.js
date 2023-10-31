// esempio di oggetto. 
// modellare le variabili rispetto a entità del mondo reale 

// const student = {
//     name: "Aldo",
//     surname: "Baglio",
//     age: 20,
//     batch: 'fs0522',
//     hasWebcam: true
// }

// let nome = "Mario";
// let cognome = "Rossi";
// let eta = 45;
// let citta = "Roma";

// racchiudo tutti i valori in un'unica entirà con gli oggetti

let utente = {
    nome: "Mario",
    cognome: "Rossi",
    eta: 45,
    citta: "Roma"    
}


// posso accedere alle PROPRIETÀ (nome , cognome ...) tramite
// DOT NOTATION

console.log(utente);
console.log("\n");
console.log(typeof utente)
console.log("\n");

console.log(utente.nome);
console.log(utente.cognnome);
console.log(utente.eta);
console.log(utente.citta);

// oltre alle PROPRIETÀ un oggetto ha anche dei METODI
// che non sono altro che funzioni dell'oggetto


// posso aggiungere proprietà agli oggetti
// o modificarli se già esistenti

utente.cap = '36052';
utente.nome = "Gino";
console.log('\n');

console.log(utente);

console.log('\n');

// notazione con parentesi quadre funziona come dot notation

console.log(utente['nome']);

// cancellare proprietà di un oggetto
delete utente.citta;
console.log('\n');

console.log(utente);

// ATTENZIONE A COPIARE GLI OGGETTI!
// se faccio:

const newUtente = utente;
newUtente.nome = "Giovanni";

// e vado a vedere utente:
console.log(utente);
// è cambiato anche lui!
// perchè facendo  const newUtente = utente; ho copiato i riferimento allo spazio di memoria
// non ho fatto una copia dell'oggetto in un'altra zona

// risolvo con:
// Object.assign()
// oppure 
// spread operator (...)

const newUtente2 = Object.assign(utente);

// oppure

const newUtente3 = {...utente};
// lo spread operator "svuota il contenuto dei ciò che precede 
// all'interno del "contenitore" in cui si trova


// utente , newUtente2 e newUtente3 sono tre oggetti diversi con lo stesso contenuto
// ma che puntano a zone di memoria diverse. A questo punto sono indipendenti. 
// Se ne modifico uno, non modifico anche gli altri
console.log('\n');
console.log("NewUtente2: ", newUtente2);

console.log('\n');
console.log("NewUtente3: ",newUtente3);




//============================
//           ARRAY
//============================

const animals = ["zebra", "gatto", "cane", "tartaruga"];
const numeri = [23, 44, 76];
let cond = [true, false, false];
let utenti = [utente, newUtente2, newUtente3];
let mix = ['testo', 23, true, utente];

let arr = [];
// posso scrivere anche 
let arr3 = new Array(); 
console.log(typeof arr);

cond = [32, 33, 23];
let arr1 = [1, 2, 3]
let arr2 = arr1; // copia il riferimento come neglio oggetti, OCCHIO!

// gli array sono zero-indexed!
// ogni valore è numerato partendo da zero;

// animals[0] = "coniglio";
console.log(animals[0]);

// gli array hanno dei metodi, in quanto oggetto!
// esempio.: sort();
console.log( animals.sort())
let ord = animals.sort();
console.log(ord);
console.log(animals);


// PROPRIETÀ LENGTH
console.log(animals.length);

//METHOD SORT
// ordina gi elementi (prima i numeri e poi le stringhe)
console.log( animals.sort())

//METHOD PUSH
// appende un nuovo elemento alla fine dell'array
console.log(animals.push('iguana'));
console.log(animals);

// METHOD UNSHIFT
//inserisce un nuvo elemento all'inizio di un array
console.log(animals.unshift('lucertola'));
console.log(animals);

// METHOD POP
// rimuove (E RITORNA) l'ultimo elemento di un array
console.log(animals.pop());
console.log(animals);

// METHOD SHIFT
// rimuove (E RITORNA) il primo elemento di un array
console.log(animals.shift());
console.log(animals);




// METHOD SPLICE
// rimuove elementi partendo da un indice specificato e per una lunghezza specificata
// se non c'è il secondo parametro va fino in fondo
console.log(animals.splice(1, 3));
console.log(animals);

// può anche eliminare e aggiungere
arr.splice(1, 1, 'nuovo elemento');
//  anche piu di un elemento
arr.splice(1, 1, 'newEle1' , 'newEle2');

// aggiungere elementi senza elimnare
arr.splice(1, 0, 'altroElement')
console.log(arr);


// METHOD REVERSE
//inverte l'ordine dell'array
arr.reverse();
console.log(arr);


console.log('\n');
console.log('\n');
console.log('\n');

//=========================================
//           LOGICA CONDIZIONALE
//=========================================

// // Il costrutto if
// if(condizione){
//     // istruzioni se condizione è vera, altrimenti salta il blocco
// }

let num = prompt('inserisci un numero');
if(num > 10) {
    console.log('il numero che hai inserito è maggiore di 10'); 
} else {
    console.log('il numero che hai inserito è minore di 10')
}
console.log('fine') // questo lo stampa sempre, è fuori dal blocco

