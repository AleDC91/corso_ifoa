// window è l'oggetto predefinito del browser che comanda tutto.
// tutte le funzionalità che mette a disposizione il browser
// gestisce il BOM -> Browser Object Model

// console.log(window.Geolocation)
// console.log(window.history);

// // DOM -> Documnt Object Model -> tutte le funzionalità della pagina

// console.log(document);
// console.log(window.document); // stessa cosa perchè document è oggetto di window

console.log(document); // visualizzazione come pagina HTML
console.dir(document); // visualizzazione come oggetto

// seleziono nodo HTML tramite ID
let h1 = window.document.getElementById("titolo");
console.log(h1);
console.dir(h1);
console.log(h1.innerText);  // vedo le proprietà degli oggetti

// DOM traversing!!

h1.innerText = "Testo modificato tramite js!"; // cambio le proprietà dell'elemento;
h1.style.color = "red";
h1.style.textDecoration = "underline";
// le proprietà in camelCase: textDecoration e non text-decoration come in css!
h1.style.textAlign = "center";
console.log(h1.innerText);  // vedo le proprietà degli oggetti

// seleziono nodo HTML tramite CLASSE
let p = document.getElementsByClassName('txt'); // non è necessario specifiacre window, perchè è l'oggetto globale, si puo omettere

console.log(p);  // restituisce HTML collection! Nota che "getElements" è plurale;
console.log(p[0]) // la prima occorrenza

let a = document.getElementsByTagName('a');
console.log(a);  // restituisce HTML collection! Nota che "getElements" è plurale;
console.log(a[0]) // la prima occorrenza

a[0].style.color = "green";
a[1].style.color = "purple";
a[2].style.color = "orange";


let p1 = document.querySelector('p') // restituisce la prima occorrenza del nodo richiesto
let aAll = document.querySelectorAll('a') // restituisce una NodeList con tutte le occorrenze

let a2 = document.querySelector("a[title='link 2']")
console.log(a2)

let innerP = document.querySelector("div p");
innerP.style.fontWeight = "bold";
innerP.style.fontSize = "1.5rem";

// ------------------------------------------
// ----CREARE NUOVI NODI HTML TRAMITE JS-----
// ------------------------------------------
// createElement()

let titolo = document.createElement('h2');
console.log(titolo);  // <h2></h2>

titolo.innerText = "Titolo in h2 da js"; 
titolo.style.textTransform = "uppercase";

// come faccio a piazzarlo nell'HTML???
// es.: voglio metterlo in <section></section>

// SELEZIONO UN NODO RADICE PRESENTE NELLA PAGINA HTML
let section = document.querySelector('section');
section.appendChild(titolo)

aAll.forEach(ele => {
    ele.style.color = "blue";
});


// ------------------------------------------
// -----------NAVIGAZIONE DEL DOM------------
// ------------------------------------------

console.dir(section); // dalla console vedo tutte le proprietà come oggetto!

let main = section.parentNode;

let body = section.parentNode.parentNode;
// ci sono un botto di funzionalità per il DOM TRAVERSING
// childElement
// children
// classList
// className
//  ....


