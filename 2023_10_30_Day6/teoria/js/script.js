
// commento linea singola


/*commento
multilinea */

//  console.log() -> stampa in console ciò che metto tra parentesi.
console.log("sono nel file esterno alla pagina. posso essere importato tramite script con attributo 'src'. sia nell'head che nel body ");

// var: creare una variabile-> possono contenere numeri, stringhe, boolean, null, undefined

var num1 = 25;
var num2 = 15.5;
var str1 = "testo a caso";
var str2 = 'altro testo a caso';
var somma = num1 + num2;
console.log(somma);

// concatena stringhe e stringhe oppure stringhe e numeri 
// perchè converte automaticamente i numeri in stringhe
var printSomma = str1 + somma; 


// la variabile è vuota
var emp1 = null;


// la variabile non è definita. come null ma diverso.
// creata ma mai messo un valore dentro.
var emp2 = undefined;


// dichiarazione di una variabile
var v;

// inizializzazione di una variabile 
v = 'variabile';

// due punti precedenti in una riga:
var v = 'variabile';

/* var ha un sacco di problemi. definita con scope globale
*/

// in questo esempio 'var' mi ridefinisce la variabile.
// e la sovrascrive. crea un sacco di problemi!!!!
// stampa 'Nuovo test' sia dentro che fuori dal blocco!
var test = "Test";
{
    var test = 'Nuovo test';
    // con var, anche se avesse un altro nome,questa è 
    // disponibile anche fuori dal blocco in cui è stata definita.
    // ad esempio se la chiamo innerTest, posso 'vederla' anche
    // fuori dal blocco
    console.log(test);
}
console.log(test);


// da ES6 non uso più 'var' ma uso 'let'
// se definisco una variabile all'interno di un blocco
// questa è disponibile solo all'interno del blocco

let test2 = "Test";
{
    let test2 = 'Nuovo test';
    console.log(test2);
}

// mi da errore, innerTest non è definita globalmente! (se fai esempio con 
// innerTest all'interno del blocco al posto di test2)
// disponibile solo all'interno del blocco
console.log(test2);

// costanti
// di solito nomi maiuscoli per convenzione
// non si può riassegnare il valore
const COSTANTE = "valore costante";
// COSTANTE = "altro valore"     questo mi da errore;



//  DATA TYPE
let data = "sono una stringa";
console.log(typeof data);
data = 25;
console.log(typeof data);
data = true;
console.log(typeof data);
data = null;
console.log(typeof data);


// OPERATORI

let n1 = 3;
let n2 = 10;

let sum = n1 + n2;
let diff = n2 - n1;
let molt = n2 * n1;
let div = n2 / n1;
let modulo = n2 / n1;

console.log("La somma è: " + sum);
console.log("La differenza è: " + diff);
console.log("La moltiplicazione è: " + molt);
console.log("La divisione è: " + div);
console.log("Il modulo è: " + modulo);


// ASSEGNAZIONE
n1 += 2;  
// è come scrivere in forma contratta:
// n1 = n1 + 2;
n1 -= 2;
n1 *= 2;
n1 /= 2;
n1 %= 2;

// OPERATORI LOGICI
// restituiscono un valore vero o falso

let n3 = 5;
let n4 = '5';

// uguale, strettamente uguale
console.log(n3 == n4); // true
console.log(n3 === n4); // false

// diverso, strettamente diverso
console.log(n3 != n4); // false
console.log(n3 !== n4); // true


let n5 = 10;

// AND &&     OR ||      NOT !
// 

// AND restituisce vero se tutte le condizioni sono vere
console.log(n3 != n4 && n3 > n5); // false

// OR restituisce vero se almeno una condizione è vera
console.log(n3 != n4 || n3 > n5); // true. Non sta manco a quardare la seconda

// NOT inverte il segno
console.log(!true); //false  
console.log(!false); //true  


// OPERATORE TERNARIO
// inizializzo un valore in base ad una condizione. per esempio:
let eta = 43;
let accesso = (eta > 18) ? "consentito" : "negato";
console.log(accesso);

