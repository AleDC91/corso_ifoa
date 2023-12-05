// ----------------------------------------------------
// ------- PROGRAMMAZIONE AD OGGETTI IN JAVASCRIPT-----
// ----------------------------------------------------

// Js non è un linguaggio ad oggetti (tipo JAVA o Python o C#), ma è un linguaggio funzionale. si basa sulle funzioni

// il nostro cervello ragiona a oggetti
// a scuola siammo stati deviati dal sistema procedurale


let obj1 = {
    name: "Mario",
    lastName: "Rossi",
    city: "Roma",
    2: 'occhi',
    saluta: function(){
        return this.name + " " + this.city
    }
};

console.log(obj1);
console.log(obj1.name);   // dot notation
console.log(obj1["city"]);  // square bracket notation
console.log(obj1[2]);   // coi numeri o keyword con spazi, uso square bracket notation
console.log(obj1.saluta())


let fiat500 = {
    marca: "fiat",
    modello: '500',
    colore: "Rosso"
}


let fordFiesta = {
    marca: "Ford",
    modello: 'Fiesta',
    colore: "Blu"
}



// prototipo JS
// ------------

// per creare degli oggetti dello stesso tipo

function Auto(marca, modello, colore){
    this.marca = marca;
    this.modello = modello;
    this.colore = colore;
}

let cinquecento = new Auto ("Fiat", "500", "Rosso");
let fiesta = new Auto( "Ford", "Fiesta", "Blu");


console.log(cinquecento);
console.log(fiesta);

// se voglio aggiungere cose alla classe:


Auto.prototype.info = function (){  // verraà applicata a tutti gli oggetti, anche se istanziati prima. Li aggiunge al prototipo
    return this.marca  + ' ' + this.modello + ' ' + this.colore
};

// ho aggiunto nuovo metodo al prototipo info


let smart = new Auto("Mercedes", "Smart", "Nero") 
console.log(smart.info());
console.log(fiesta.info())



// poi sono state introdote le classi

// una classe è come un protootipo, solo scritto in maniera diversa

class AutoClass {
    constructor(marca, modello, colore){
        this.marca = marca;
        this. modello = modello;
        this.colore = colore;
    }
}

let panda = new AutoClass("Fiat", "Panda", "Verde");



// con class posso fare alcune cose che si possono fare con i linguaggi ad oggetti
// es.: EREDITRIETÀ


// invece di fare come nei commenti qua sotto...
// class Uomo {
//     constructor(nome, cognome, citta, barba){
//         this.nome = nome;
//         this.cognome = cognome;
//         this.citta = citta;
//         this.barba = barba;
//     }
// }

// class Donna {
//     constructor(nome, cognome, citta, smalto){
//         this.nome = nome;
//         this.cognome = cognome;
//         this.citta = citta;
//         this.smalto = smalto;
//     }
// }

class Persona {
    constructor(nome, cognome, citta){
    this.nome = nome;
    this.cognome = cognome;
    this.citta = citta;
    }
}

class Uomo extends Persona {
    constructor(nome, cognome, citta, barba){
        super(nome, cognome, citta);
        this.barba = barba;
    }
    static lavora(){  // se uso static diventa un metodo di classe e non di istanza
        console.log("sto lavorando");
    }


}

class Donna extends Persona {
    constructor(nome, cognome, citta, smalto){
        super(nome, cognome, citta);
        this.smalto = smalto;
    }
    
}


let u = new Uomo("Gino", "Lao", "Bassano", true)


console.log(Uomo.lavora())  // chiamo il metodo di classe statico
