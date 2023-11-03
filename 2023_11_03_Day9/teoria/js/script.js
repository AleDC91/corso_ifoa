// --------------------------
//          FUNZIONI
// --------------------------

/*
blocco di istruzioni che scrivo una volta e posso usarlo
quante volte voglio nel codice
*/

// sottoprogramma che risolve un problema specifico
// in questo caso fa qualcosa ma non restituisce niente
// stampa solo il risultato a video, ma non posso tenere traccia 
// del risultato 
function func(){                        // DICHIARAZIONE DI FUNZIONE
    let num = 5 + Math.random();        //  
    let pow = num * num;                //
    console.log(pow / num)              //
}

func();   // INVOCAZIONE DI FUNZIONE
func();


// posso PASSARE DEI PARAMETRI ALLA FUNZIONE
// posso RITORNARE VALORI DALLA FUNZIONE
// così posso salvare i risultati in una variabile
// o usarli come input per una seconda funzione (concatenazione)
function func2(x){
    let num = x + Math.random();
    let pow = num * num;
    // console.log(pow / num)
    return pow / num; // invece di stamparlo lo ritorna,così posso conservarlo in nuna variabile
}

let result = func2(3);
let result2 = func2(3);
console.log(result, result2);


// PARTICOLARITÀ DI  JS
// --------------------
// ARRAY 'arguments' in OGNI FUNZIONE:

function func3(){
    console.log("Parametri: " + arguments.length);
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
        
    }
}
func3(3, 5, 'ciao');


// posso fare la funzione somma senza inserire parametri nella dichiarazione della funzione
function func4(){
    let res = 0;
    console.log("Parametri: " + arguments.length);
    for (let i = 0; i < arguments.length; i++) {
        res +=  arguments[i];
    }
    console.log(res);
}

func4(3, 5, 2, 12);


// HOISTING (sollevamento)
// -----------------------
// Permette di invocare una funzione o usare una variabile prima che sia stata dichiarata;

console.log(variabileSotto); // undefined -> esiste ma non è definita
var variabileSotto = "ciaone sono qui"; //con var
console.log(variabileSotto); //ciaone sono qui

// console.log(test2);  //con let mi da errore, anche se la variabile è stata sollevata
let test2 = "test let";
console.log(test2);

func5();

function func5(){
    console.log('testFunc');
}
console.log('-------------------');

func5();


// FUNZIONI ANONIME O EXPRESSION FUNCTION
// --------------------------------------
// funct6();  --> non funziona perhè funzioni anonime non risentono dell'hoisting
let funct6 = function(){
    console.log('ciao');
}
funct6();



// ALTRA PARTICOLARITÀ DI JS.
// -------------------------- 
// posso passare il nome della funzione senza chiamarla.

let f1 = function() {
     return 'sono una funzione';
}

let resu = f1();
console.log(resu);  // stampa 'sono una funzione'

let resu2 = f1;
console.log(resu2); // stampa tutto il corpo della funzionef1(){
                                                     // console.log(resu)};
let resu3 = resu2();
console.log(resu3);

// SCOPE 
// -----
let v1 = "sono una variabile globale";   // Global scope

{
    let v1 = "sono una variabile di blocco";  // Block scope
}

function fscope(){
let v1 = "sono una variabile di function";  // Scope di function
}


// ARROW FUNCTION
// --------------

let arrowFunc1 = () => { 
    console.log("sono una funzione")
}
// se ho una sola istruzione, tolgo le graffe
// se ho un solo return, ometto 'return';
let arrowFunc2 = () => "altra funzione"; 




// ---------------------
// METODI DELLE STRINGHE
// ---------------------

let stringa = "Ciao studenti. Salutiamo tutti gli studenti";
console.log(stringa.indexOf('studenti')); // solo la prima occorrenza

console.log(stringa.lastIndexOf('studenti')); // solo ultima occorrenza

console.log(stringa.indexOf('studenti', 6)) // parte da indice 6 a cercare

console.log(stringa.search('studenti'));  // 5, ma qui posso uasre le REGEX

console.log(stringa.length); // 43

console.log(stringa.slice(5, 10)) // 'stude'
console.log(stringa.slice(-8, )) // 'studenti'  conta dalla fine

console.log(stringa.substring(5, 10)) // 'stude'  //come slice ma accetta sol valori positivi

console.log(stringa.replace("a", "x")); // solo prima occorrenza di "a"

console.log(stringa.replaceAll("a", "x")); // tutte le occorrenze di "a"

console.log(stringa.toLowerCase()); // trasforma in minuscolo

console.log(stringa.toUpperCase()); // trasforma in maiuscolo

console.log(stringa.concat(' - FINE!')); // aggiunge il valore tra parentesi alla stringa

console.log(stringa.trim()); // toglie spazi vuoti prima e dopo la stringa

console.log(stringa.charAt(8)); // carattere all'indice indicato

console.log(stringa.split(" ")) // restituisce un array che separa gli elementi della stringa ogni volta che incontra il carattere definito tra parentesi. 




// -----------
// METODI MATH
// -----------

console.log(Math.random());  // n casuale tra 0 e 1

console.log(Math.floor(23.3)); // arrotonda al piu basso

console.log(Math.ceil(23.3)); // arrotonda al piu alto

console.log(Math.round(23.3)); //arrotonda

console.log(Math.max(23.3, 100, -12, -55.4)); // restituise il numero piu grande

console.log(Math.min(23.3, 100, -12, -55.4)); // restituise il numero piu piccolo



// -----------
// METODI DATE
// -----------


let now = new Date();  // data di adesso
console.log(now);

let bdate = new Date(2023, 10, 23)

console.log('oggi è il giorno: ' + now.getDate() + " del mese di " + now.getMonth())


// per estrarre solo alcuni valori di Date
now.getFullYear();
now.getMonth();
now.getDate()
now.getHours();
now.getMinutes();
now.getSeconds()
now.getMilliseconds()
now.getTime();
now.getDay();

// per MODIFICARE solo alcuni valori di Date
now.setFullYear(/* valori*/)
now.setMonth(/* valori*/);
now.setDate(/* valori*/)
now.getHours(/* valori*/);
now.setMinutes(/* valori*/);
now.setSeconds(/* valori*/)
now.setMilliseconds(/* valori*/)
now.setTime(/* valori*/);
now.setDay(/* valori*/);