/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. 
 Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/*
/* SCRIVI QUI LA TUA RISPOSTA */

let str = "ciao sono una stringa"; //una stringa è un testo
let num = 25; //numero
let bol = true; // un booleano è un valore che può assumere true o false

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name = "Alessandro";
console.log(name);

// potrebbe segnalare name come deprecato, poichè è già presente all'interno dell'oggetto window.
// non è sbagliato ma se ne sconsiglia l'uso.

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1 = 12;
let num2 = 20;
let somma = num1 + num2;
console.log("la somma tra " + num1 + " e " + num2 + " è " + somma);


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x;
x = 12;
console.log("Il valore della variabile x è " + x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
name = "Dalla Costa"

console.log("Il nuovo valore della variabile name è: " + name);
// let name = "Dalla Costa";    
// mi darebbe errore 
// perchè non si puo dichiarare una variabile già dichiarata con let


const COGNOME = "Rossi";
console.log("il valore della costante cognome è: " + COGNOME);
// COGNOME = "Bianchi";   // non si può assegnare un nuovo valore ad una costante


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let diff = x - 4;
console.log("La differenza tra x e 4 è: " + diff)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/


/* SCRIVI QUI LA TUA RISPOSTA */
let name1, name2; //posso dichiarare più variabili allo stesso tempo!

name1 = 'john';
name2 = 'John';

console.log("Il valore della variabile name 1: " + name1 + " e la variabile name2: " + name2 + " sono uguali? " + (name1 === name2))
console.log("Il valore della variabile name 1: " + name1 + " e la variabile name2: " + (name2.toLowerCase()) + " sono uguali? " + (name1 == name2.toLowerCase()))




