// -----------------------------------
//              SWITCH
// -----------------------------------

let i = 1;

switch (i) {
  case 0:
    console.log("i è 0");
    break;
  case 1:
    console.log("i è 1");
    break;

  case 2:
    console.log("i è 2");
    break;

  default:
    console.log("altro unmero");
    break;
}

// come sequenza di else if, ma piu nello e performante
// esempio con else if:

let giornoSettimana = 56;

if (giornoSettimana === 1) {
  console.log("oggi è lunedì");
} else if (giornoSettimana === 2) {
  console.log("oggi è martedì");
} else if (giornoSettimana === 3) {
  console.log("oggi è mercoledì");
} else if (giornoSettimana === 4) {
  console.log("oggi è giovedì");
} else if (giornoSettimana === 5) {
  console.log("oggi è venerdì");
} else if (giornoSettimana === 6) {
  console.log("oggi è sabato");
} else if (giornoSettimana === 7) {
  console.log("oggi è mercoledì");
} else {
  console.log("numero non valido");
}

// con switch. PIU PERFORMANTE
// il break è opzionale, ma in questo caso serve per bloccare
//  l'esecuzione del codice e non andare oltre.
// altrimenti se per esempio  giornoSettimana = 4, stampa tutti
// i giorni da giovedi a domenica.
// non metterlo puo essere utile per altre cose
switch (giornoSettimana) {
  case 1:
    console.log("oggi è lunedi");
    break;
  case 2:
    console.log("oggi è martedi");
    break;
  case 3:
    console.log("oggi è mercoledi");
    break;
  case 4:
    console.log("oggi è giovedi");
    break;
  case 5:
    console.log("oggi è venerdi");
    break;
  case 6:
    console.log("oggi è sabato");
    break;
  case 7:
    console.log("oggi è domenica");
    break;

  default:
    console.log("valore errato");
    break;
}

// esempio di quando puo essere utile non mettere il break
// prima lo metto dappertutto:

// let mese = 11;
// switch (mese) {
//   case 1:
//     console.log("Inverno");
//     break;
//   case 2:
//     console.log("Inverno");
//     break;
//   case 3:
//     console.log("Primavera");
//     break;
//   case 4:
//     console.log("Primavera");
//     break;
//   case 5:
//     console.log("Primavera");
//     break;
//   case 6:
//     console.log("Estate");
//     break;
//   case 7:
//     console.log("Estate");
//     break;
//   case 8:
//     console.log("Estate");
//     break;
//   case 9:
//     console.log("Autunno");
//     break;
//   case 10:
//     console.log("Autunno");
//     break;
//   case 11:
//     console.log("Autunno");
//     break;
//   case 12:
//     console.log("Inverno");
//     break;
//   default:
//     console.log("valore errato");
//     break;
// }

// senza break:

let mese = 11;
switch (mese) {
  case 12: console.log('è Natale')
  case 1:
  case 2:
    console.log("Inverno");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Primavera");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Estate");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Autunno");
    break;

  default:
    console.log("valore errato");
    break;
}


// -----------------------------------
//               I CICLI
// -----------------------------------


// CILCO WHILE
// -----------

// ripete blocco di istruzioni finchè una condizione è vera

// let count = 5;

// while (count > 0){
//     console.log("ciao " + count);
//     count --;  //operatore unario di decremento. -> count += 1;
// }
// console.log('FINE');


// occhio a operatori unari di POSTINCREMENTO (X++) o POSTDECREMENTO (X--)
// esistono peratiru unari di PREINCREMENTO/DECREMENTO

// let x = 5;
// let y = x + 1;  // x=5 y=6

// let y = x++; // x=6 y=5  ->  prima assegna e poi incrementa!

// let y = ++x; // x=6 y=6  ->  prima incrementa e poi assegna!

// while(true){
//     let v = prompt('Inserisci un numero o end per terminare');
//     if(v === "end"){
//         break;
//     }
//     console.log(v);
// }


// let sum = 0;

// while(true){
//     let v = prompt("Inserisci un numero");
//     if(v === "end" || v === null){ //null è quando premo annulla nel prompt
//         break;
//     }
//     if(isNaN(Number(v))){
//         console.log("non hai inserito un numero");
//     } else {
//         console.log(Number(v));
//         sum += Number(v);
//     }
// }
// console.log(sum);




// CILCO DO WHILE
// --------------

// do{
    //     // blocco di istruzioni
    //     count++;
    // } while (condition);
    
// let count2 = -12;

// do{
//     console.log("Ciao ", count2);
//     count2--;
// } while (count2 > 0);

// console.log("FINE");

// se count è -12, per esempio, il primo ciclo viene fatto 
// lo stesso anche se la condizione è falsa.
// il controllo viene fatto alla fine;


// CILCO FOR
// ---------

// inizializzazine, condizione e incremento tutti in un unico posto!
// for (let count = val; count < val; count++) {
//     // blocco di istruzioni;

// }

for(let i = 0; i < 10; i++){
    console.log("ciao ", i);
}  // stampa i numeri da 1 a 9 con "ciao" davanti


let numeri = [2, 32, 22, 57, 3, 17];
let somma = 0;

for(let i = 0; i < numeri.length; i++){
    somma += numeri[i];
}
console.log(somma);