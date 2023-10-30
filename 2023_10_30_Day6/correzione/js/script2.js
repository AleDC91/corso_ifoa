// alert('ok');  //utile per controllare se uno script è linkato correttamente

console.log("espressione"); // stampa in console il contenuto delle parentesi

// prompt('messaggio', 'valore di default');  //apre una finestra di input, il valore che do può essere assegnato a una variabile.
let nome = prompt("inserisci il tuo nome" , "anonimo"); // il valore di default viene visualizzato subito
let cognome = prompt('inserisci il tuo cognome');
let eta = prompt('eta');

console.log("Ciao " + nome + " " + cognome);
let accesso = (eta > 18) ? "accesso consentito" : "accesso negato";
console.log(accesso);
// se su prompt premo annulla, viene restituito null, se lascio vuoto, restituisce una stringa vuota
// returns String | null
// occhio che non restituisce numeri
// se metti un numero, javascript fa CONVERSIONE IMPLICITA:
// se una stringa può essere convertita in numero, lo fa.


console.log(eta + 2);  // il piu viene inteso come concatenazione perchè età è una stringa
console.log(eta * 2);
console.log("Number " + (Number(eta) + 3));  // casting di eta in numero
console.log("ParseInt " +( parseInt(eta) + 3)); // come Number, ma non vale per i float.Non arrotonda, taglia i decimali! Number si
console.log("parseFloat " + (parseFloat(eta) + 3));
console.log("segno + " + (+eta + 2));


let conferma = confirm("ti piace JS?");
console.log("confermi? " + conferma);
// come prompt, ma restituisce true or false invece di una stringa

 