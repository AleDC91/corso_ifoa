/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num1 = 3;
let num2 = 65;

if (num1 > num2) {
  console.log(num1 + " è maggiore di " + num2);
} else if (num1 < num2) {
  console.log(num1 + " è minore di " + num2);
} else {
  console.log(num1 + " è uguale a " + num2);
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num3 = 3;
if (num3 !== 5) {
  console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num4 = 15;
if (num4 % 5 === 0) {
  console.log("divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num5 = 10;
let num6 = 7;

if (
  num5 == 8 ||
  num6 == 8 ||
  num5 + num6 === 8 ||
  num6 - num5 === 8 ||
  num5 - num6 === 8
) {
  console.log("ok");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let totalShoppingCart = 41;
// if(totalShoppingCart > 50){
//     console.log("totale da pagare: " + totalShoppingCart);
// } else{
//     console.log("totale da pagare: " + (totalShoppingCart + 10));
// }

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart = 41;
let totalCart = totalShoppingCart * 0.8;
let costoSpedizione = 10;

if (totalCart < 50) {
  totalCart += costoSpedizione;
}
console.log("totale da pagare: " + totalCart);

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let x = 10;
// let y = 15;
// let z = 25;

// if (x > y) {
//   if (z > x) {
//     console.log(z, x, y);
//   } else {
//     if (z > y) {
//       console.log(x, z, y);
//     } else {
//       console.log(x, y, z);
//     }
//   }
// } else if (y > x) {
//   if (z > y) {
//     console.log(z, y, x);
//   } else {
//     if (z > x) {
//       console.log(y, z, x);
//     } else {
//       console.log(y, x, z);
//     }
//   }
// }

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */


// let val = "Ciao";
// if(typeof val === 'number'){
//     console.log(val + ' è un numero');
// } else {
//     console.log(val + ' non è un numero');
// }

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let valNum = 25;
// if(valNum % 2 === 0){
//     console.log(pari);
// } else {
//     console.log(dispari);
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

let val = 15;

if (val < 5){
  console.log("Meno di 5");
} else if (val < 10){
  console.log("Meno di 10");
} else {
  console.log("maggiore o uguale a 10");
}
/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
    name: "John",
    lastName: "Doe",
    skills: ["javascript", "html", "css"],
  };

/* SCRIVI QUI LA TUA RISPOSTA */
me.city = "Toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.lastName;
/* ESERCIZIO 13
    Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
  */

/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop();
console.log(me);


/* ESERCIZIO 14
    Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
  */

/* SCRIVI QUI LA TUA RISPOSTA */

// let arr = [];
// arr[0] = 1;
// arr[1] = 2;
// arr[2] = 3;
// arr[3] = 4;
// arr[4] = 5;
// arr[5] = 6;
// arr[6] = 7;
// arr[7] = 8;
// arr[8] = 9;
// arr[9] = 10;

// console.log(arr);

// // oppure:

// arr.push(1);
// arr.push(2);
// arr.push(3);
// arr.push(4);
// arr.push(5);
// arr.push(6);
// arr.push(7);
// arr.push(8);
// arr.push(9);
// arr.push(10);

// // oppure
// arr.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);


/* ESERCIZIO 15
    Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
  */

/* SCRIVI QUI LA TUA RISPOSTA */

arr[9] = 100;
console.log(arr);

// oppure:

arr[arr.length - 1] = 100;
console.log(arr);

// oppure:
arr.splice((arr.length - 1), 1, 100);
console.log(arr);