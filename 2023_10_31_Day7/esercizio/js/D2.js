/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// const num1 = Number(prompt('Inserisci il primo numero'));
// const num2 = Number(prompt('inserisci il secondo numero'));

// if(num1 > num2){
//   console.log("Il numero più grande che hai inserito è: " + num1);
// }else if(num1 == num2){
//   console.log("Hai inserito due numeri uguali!");
// }else{
//   console.log("Il numero più grande che hai inserito è: " + num2);
// }

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// const num3 = parseInt(prompt('inserisci un numero'));
// if(num3 != 5){
//   console.log('not equal');
// }

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let num4 = Number(prompt('Inserisci un numero, ti dirò se è divisibile per 5!'));

// if(num4 % 5 == 0){
//   console.log(num4 + " è divisibile per 5");
// } else {
//   console.log(num4 + " non è divisibile per 5");
// }

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// const num5 = Number(prompt('Inserisci il primo numero'));
// const num6 = Number(prompt('inserisci il secondo numero'));

// if(num5 == 8 | num6 == 8 | num5 + num6 == 8){
//   console.log('almeno uno dei due numeri che hai inserito, o la somma dei due è 8');
// } else {
//   console.log('non hai inserito un 8 e nemmeno la somma dei due numeri è 8');
// }

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let totalShoppingCart = Number(prompt("inserisci l'importo totale del carrello"));
// if(totalShoppingCart <= 50){
//   totalShoppingCart += 10;
// }
// console.log("L'importo totale è: " + totalShoppingCart)

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let totalShoppingCart = Number(prompt("inserisci l'importo totale del carrello"));
// //  qui ci andrebbe un controllo sulle cifre
// totalShoppingCart *= 0.8;
// if(totalShoppingCart <= 50){
//   totalShoppingCart += 10;
// }
// console.log("L'importo totale è: " + totalShoppingCart + " €")

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// const num1 = Number(prompt('inserisci il primo numero'));
// const num2 = Number(prompt('inserisci il secondo numero'));
// const num3 = Number(prompt('inserisci il terzo numero'));
// // questo da traccia non è valido
// // let arr = [num1, num2, num3];
// // console.log(arr.sort());

// let arr = [];

// let max, min, med;

// if (num1 > num2 & num1 > num3){
//   max = num1;
//   if(num2 > num3){
//     med = num2;
//     min = num3;
//   } else {
//     med = num3;
//     min = num2;
//   }
//   console.log(max, med , min)

// } else if(num2 >= num1 & num2 >= num3){
//   max = num2;
//   if(num1 >= num3){
//     med = num1;
//     min = num3;
//   } else {
//     med = num3;
//     min = num1;
//   }
//   console.log(max, med , min)

// } else if (num3 >= num1 & num3 >= num2){
//   max = num3;
//   if(num1 >= num2){
//     med = num1;
//     min = num2
//   } else{
//     med = num2;
//     min = num1;
//   }
//   console.log(max, med , min)
// }

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let val1 = prompt("inserisci qualcosa qui");
// val1 = Number(val1);
// // se converto una stringa in numero con Number, pur cambiando il tipo, non distinguo tra valore numerico valido e NaN
// // uso isNaN
// if (!isNaN(val1)) {
//   console.log("è stato inserito un numero");
// } else {
//   console.log("NON è stato inserito un numero");
// }

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// num1 = parseInt(prompt("inserisci un numero, ti dirò se è pari o dispari"));
// if (isNaN(num1)) {
//   console.log("non hai inserito un numero");
// } else {
//   if (num1 % 2 == 0) {
//     console.log("hai inserito un numero pari");
//   } else {
//     console.log("hai inserito un numero dispari");
//   }
// }

/* ESERCIZIO 10
Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
let val = 7
if (val < 10) {
  console.log("Meno di 10");
} else if (val < 5) {
  console.log("Meno di 5");
} else {
  console.log("Uguale a 10 o maggiore");
}
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// uso condizioni indipendenti per fare in modo che lo script controlli anche le condizioni successive se ne trova una di vera.
// nell'esempio sopra, appena incontra una condizione vera, esegue il codice e tralascia i successivi else if ed else
// correlati al primo if

// let val = prompt("inserisci un numero");

// if (isNaN(val)) {
//   console.log("non hai inserito un numero");
// } else {
//   if (val < 10) {
//     console.log("Meno di 10");
//   }
//   if (val < 5) {
//     console.log("Meno di 5");
//   }
//   if(val >= 10){
//     console.log("Uguale a 10 o maggiore");
//   }
// }

// // oppure, in modo più 'logico':


// let val2 = prompt("inserisci un numero");

// if (isNaN(val2)) {
//   console.log("non hai inserito un numero");
// } else {

//   if(val2 < 5){
//     console.log("Meno di 10");
//     console.log("Meno di 5");
//   } else if (val2 > 5 & val2 < 10){
//     console.log("Meno di 10");
//   } else{
//     console.log("Uguale a 10 o maggiore");

//   }
// }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */
// me.city = "Toronto";
// console.log(me);

// oppure

// me['city'] = 'Toronto';
// console.log(me);


/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// console.log(me);
// delete me.lastName;
// console.log(me);

// oppure

// delete me['lastName'];
// console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// console.log(me.skills)

// const ultimoElemento = me.skills.pop();
// console.log(me.skills)
// console.log('Ho rimosso: ' + ultimoElemento);


/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let arr = [];  //volendo potrei fare anche let arr = new Array();

// arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(arr);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// arr.splice((arr.length - 1), 1, 100);
// console.log(arr);