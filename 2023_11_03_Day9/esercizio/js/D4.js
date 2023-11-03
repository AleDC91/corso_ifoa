/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function area(l1, l2){
    return l1 * l2;
}
let res = area(4, 3);
console.log(res);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/


/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum(x, y){
    if(x === y){
        return 6 * x;
    } else {
        return x + y;
    }
}
console.log(crazySum(5, 4));
console.log(crazySum(5, 5));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let crazyDiff = (n) => {
    if(n > 19){
        return 3 * Math.abs(n - 19);
    } else {
        return Math.abs(n - 19);
    }
}
console.log(crazyDiff(22));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(n){
    if( n === 400 || (n > 20 && n <= 100)){
        return true;
    }
}
console.log(boundary(20));


/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let epify = stringa => {
    if(stringa.slice(0, 7) === 'EPICODE'){
        return stringa;
    } else {
        return "EPICODE " + stringa;
    }
}


console.log(epify("EPICODE ha 7 lettere"))
console.log(epify("ha 7 lettere"))

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(n){
    if(n % 3 === 0 || n % 7 === 0){
        return true;
    } else {
        return false;
    }
}

console.log(check3and7(99));
console.log(check3and7(19));
console.log(check3and7(49));



/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(stringa) {
    let revString = [];
    stringa = stringa.split("");
    // console.log(stringa);
    for(let i = 0; i < stringa.length + 1; i++){
        revString[i] = stringa[stringa.length - i]
    }
    // console.log(revString);
    return revString.join("");
}

console.log(reverseString('ACETONE'));


/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function upperFirst(stringa){
   let toArr = stringa.split(" ");
   let newArr = [];
//    console.log(toArr);
   for(let i = 0; i < toArr.length; i++){
    newArr.push(toArr[i].charAt(0).toUpperCase() + toArr[i].slice(1))
   }
  return newArr.join(" ");
}

console.log(upperFirst('ciao ciao prova con piu parole'));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function cutString(stringa){
    return stringa.slice(1, stringa.length - 1);
}
console.log(cutString('prova con questa stringa'))

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom(n){
    resArr = [];
    for(let i = 0; i < n; i++){
        resArr[i]  = (Math.floor(Math.random() * 11)); 
    }
    return resArr;
}

console.log(giveMeRandom(5));