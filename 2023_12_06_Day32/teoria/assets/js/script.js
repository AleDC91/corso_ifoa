let json = {
    "nome": "Mario",
    "cognome": "Rossi",
    "eta": 35,
    "occhiali": true,
    "linguaggi": ["Javascript", "HTML", "css", "sass"],
    "indirizzo": {
        "via": "test 54",
        "citta": "Roma",
        "regione": "Lazio"
    }
}

let obj = {
    nome: "Mario",
    cognome: "Rossi",
    eta: 35,
    occhiali: true,
    linguaggi: ["Javascript", "HTML", "css", "sass"],
    indirizzo: {
        via: "test 54",
        citta: "Roma",
        regione: "Lazio"
    }
}


// Metodi della classe JSON (stringify - parse)
console.log(obj);
console.log(json)

let jsonObj = JSON.stringify(obj); // metodo della classe JSON che trasforma un oggetto JS in JSON

console.log(jsonObj);

let objJson = JSON.parse(jsonObj); // Metodo della classe JSON che trasforma un JSON in un oggetto

console.log(objJson);


// WEb Storage (localStorage - sessionStorage)
// metodi di window

localStorage.setItem("test", "Mio local storage");
localStorage.setItem("nome", "Alessandro");

console.log(localStorage.length);

let testLocal = localStorage.getItem("test");
console.log(testLocal);

let key = localStorage.key(1)

localStorage.removeItem("test");

localStorage.clear();