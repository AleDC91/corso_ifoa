/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/*
/* SCRIVI QUI LA TUA RISPOSTA */

// I datatype di Javascript visti fino a questo momento sono:
// String -> tipo di dato che consiste in una sequenza di caratteri, anche numerici, che viene riconosciuta come un unico dato;
// number -> qualsiasi tipo di numero, anche decimale o negativo.
// boolean -> i valori di tipo booleano sono 2: vero o falso.
// null -> una variabile con valore "null" ha valore nullo. Può essere stato definito in precedenza e poi rimosso o inizializzato come tale.
// undefined -> se la variabile è stata dichiarata, ma non inizializzata, sarà di tipo undefined*/
console.log("\n")


/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name = "Alessandro";
console.log(name);

/* la stessa variabile può essere definita con la keyword 'var' al posto di 'let':
var name = "Alessandro";
questa versione però potrebbe dare più problemi in quanto potrebbe essere sovrascritta involontariamente
oppure usata in parti del codice indesiderate.
*/
console.log("\n")
/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// posso sommare direttamente i due numeri in fase di inizializzazione di una variabile:

let num1 = 12 + 20;
console.log(num1);

// oppure assegnare i due addendi a due variabili diverse e poi sommarle tra loro:

let add1 = 12;
let add2 = 20;
let num2 = add1 + add2;
console.log(num2);

// altrimenti se voglio solo stampare i due numeri in console, basta eseguire l'operazione direttamente tra le parentesi della funzione:
console.log(12 + 20)



console.log("\n")
/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x = 12;
// come prima, potrei usare var, ma è meglio let.
console.log("\n")
/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

nome = "Dalla Costa";

console.log(nome);

// le costanti per definizione non possono essere modificate una volta dichiarate:
const PI = 3.14;
// PI = 3.2;  da errore.

console.log(PI);

console.log("\n")
/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let sott = 4 - x;
console.log(sott);

// potrei anche assegnare il valore 4 ad una variabile:
let val = 4;
sott = val - x;  // qui assegno un nuovo valore alla variabile 'sott' definita sopra,
console.log("Il risultato è: " + sott);

console.log("\n")
/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john";
let name2 = "John";
/* SCRIVI QUI LA TUA RISPOSTA */

console.log("name1 e name2 sono uguali? " + (name1 == name2));

// usando un'uguaglianza stretta per controllare anche il tipo:

console.log("name1 e name2 sono strettamente uguali? " + (name1 === name2));

// invertendo la logica:

console.log("name1 e name2 sono diversi? " + (name1 != name2));
// usando un'uguaglianza stretta per controllare anche il tipo:

console.log("name1 e name2 sono strettamente diversi? " + (name1 !== name2));


console.log("\n")

// Per rendere i valori delle variabili stringhe di lettere minuscole, uso la funzione toLowerCase()

console.log("name1 e name2 sono uguali se tutti in minuscolo? " + (name1.toLowerCase() == name2.toLowerCase()));

// usando un'uguaglianza stretta per controllare anche il tipo:

console.log("name1 e name2 sono strettamente uguali se tutti in minuscolo? " + (name1.toLowerCase() === name2.toLowerCase()));

// invertendo la logica:

console.log("name1 e name2 sono diversi se tutti in minuscolo? " + (name1.toLowerCase() != name2.toLowerCase()));
// usando un'uguaglianza stretta per controllare anche il tipo:

console.log("name1 e name2 sono strettamente diversi se tutti in minuscolo? " + (name1.toLowerCase() !== name2.toLowerCase()));

console.log("\n")



// anche in questo caso potrei creare delle nuove variabili che contengono i valori lowercase.

name1Lower = name1.toLowerCase();
name2Lower = name2.toLowerCase();

console.log("name1 e name2 sono uguali se tutti in minuscolo? " + (name1Lower == name2Lower));

// usando un'uguaglianza stretta per controllare anche il tipo:

console.log("name1 e name2 sono strettamente uguali se tutti in minuscolo? " + (name1Lower === name2Lower));

// invertendo la logica:

console.log("name1 e name2 sono diversi se tutti in minuscolo? " + (name1Lower != name2Lower));
// usando un'uguaglianza stretta per controllare anche il tipo:

console.log("name1 e name2 sono strettamente diversi se tutti in minuscolo? " + (name1Lower !== name2Lower));



