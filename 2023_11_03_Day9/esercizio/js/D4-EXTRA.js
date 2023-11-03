// Esercizi aggiuntivi (facoltativi) per D4
console.log("----------------------");
console.log("---------EXTRA--------");
console.log("----------------------");

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function checkArray(numArr) {
  let sum = 0;
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] > 5) {
      console.log(numArr[i]);
      sum += numArr[i];
    }
  }
  return sum;
}

console.log("La somma è: " + checkArray(giveMeRandom(5)));

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let shoppingCart = [
  {
    price: 25,
    name: "nomeProdotto",
    id: "1dd11",
    quantity: 2,
  },
  {
    price: 20,
    name: "nomeProdotto2",
    id: "1dd12",
    quantity: 3,
  },
  {
    price: 75,
    name: "nomeProdotto3",
    id: "1dd13",
    quantity: 10,
  },
];

function shoppingCartTotal() {
  total = 0;
  // console.log(cart.length);
  for (let i = 0; i < shoppingCart.length; i++) {
    total += shoppingCart[i].price * shoppingCart[i].quantity;
  }
  return total;
}

console.log(shoppingCartTotal(shoppingCart));

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
newObj = {
  price: 9,
  name: "nomeProdotto4",
  id: "1dd14",
  quantity: 10,
};

function addToShoppingCart(objToAdd) {
  shoppingCart.push(objToAdd);
  return shoppingCartTotal(shoppingCart);
}

console.log(addToShoppingCart(newObj));

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function maxShoppingCart(cart) {
  let max = 0;
  for (i = 0; i < cart.length; i++) {
    if (cart[i].price > max) {
      max = cart[i].price;
    }
  }
  return max;
}

console.log(maxShoppingCart(shoppingCart));
/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function latestShoppingCart(cart) {
  return cart[cart.length - 1].name;
}
console.log(latestShoppingCart(shoppingCart));

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function loopUntil(n) {
  count = 0;

  for (let i = 0; count < 3; i++) {
    let rand = Math.floor(Math.random() * 10);
    if (rand > n) {
      console.log(rand);
      count++;
    } else {
      console.log(rand);

      count = 0;
    }
  }
}
loopUntil(7);

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function average(arr){
    let sum = 0;
    realLength = arr.length;
    for(let i = 0; i < arr.length; i++){
        if((typeof arr[i] === 'number') && (!isNaN(arr[i])) ){
            sum += Number(arr[i]);
        } else {
            realLength--;
        }
    }
    return (sum / realLength);
}

console.log("La media è: " + average([10, 20, 30, 'ciao']));

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function longest(arr){
    let max = arr[0];
    for(let k = 0; k < arr.length; k++){
        if(arr[k].length > max.length){
            max = arr[k]
        }
    }
    return max;
}

let arrayProva = ['bububu', 'ciaadasdo',  'abcsddfgsdfgsdfgsdfg'];
console.log(longest(arrayProva))

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */


// considero solo le maiuscole con le regex potrei controllare le combinazioni di maiuscole e minuscole
function isNotSpam(mailContent){
let spam = mailContent.indexOf('SPAM');
let scam = mailContent.indexOf('SCAM');


    if(scam !== -1 || spam !== -1){
        return false;
    } else {
        return true;
    }
}

console.log(isNotSpam('contieneSCAM'));
console.log(isNotSpam('contiSPAMsdvvdfa'))
console.log(isNotSpam('contieneSLAM'))

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function dayCalc(data){

    past = Date.parse(data);
    now = new Date();
    
    console.log(now.getTime());
    console.log(past);
    console.log(now.getTime() - past);

    let diff =  (now.getTime() - past);

    days = diff / 1000 / 60 / 60 / 24
    console.log(days)
    return parseInt(days);
}

console.log(dayCalc('2022-11-03'))

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function matrixGenerator(x, y){
    let matrix = [];
    for(let i = 0; i < x; i++){
        matrix[i] = [];
        for(let j = 0; j < y; j++){
            matrix[i][j] = String(i).concat(String(j));
        }
    }
    return matrix;
}

console.log(matrixGenerator(4, 4));