

console.log(
`
------------------------
------ESERCIZIO 1-------
------------------------
`
);


class User{
    constructor(firstName, lastName, age, location){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }

    confrontaEta(p){
        if(p.age > this.age){
           return `${p.firstName}, ${p.age} anni, è più vecchio di ${this.firstName}, ${this.age} anni`
        } else if (p.age < this.age){
            return `${this.firstName}, ${this.age} anni, è più vecchio di ${p.firstName}, ${p.age} anni`
        } else{
            return `${this.firstName} ha la stessa età di ${p.firstName}, ${p.age} anni`
        }
    }
}

let utente1 = new User('Mario', 'Rossi', 76, "Treviso");
let utente2 = new User("Francesca", "Arancioni", 34, "Rovigo");
let utente3 = new User("Viola", "Blu", 34, "Belluno");

console.log(utente1.confrontaEta(utente2));
console.log(utente3.confrontaEta(utente1));
console.log(utente2.confrontaEta(utente3));




// SECONDO ESERCIZIO

console.log(
    `
    ------------------------
    ------ESERCIZIO 2-------
    ------------------------
    `
    );
    let allPets = [];
class Pet{
    static count = 0;
    constructor(petName, ownerName, species, breed, count){
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
        this.count = Pet.count;
        Pet.count++;
    }

    hasSameOwner(pet){
        if(pet.ownerName === this.ownerName){
            return true;
        } else {
            return false;
        }
    }
}

// let p1 = new Pet("Bobby", "Mario", "cane", "labrador");
// let p2 = new Pet("Billy", "Giuseppe", "gatto", "persiano");
// let p3 = new Pet("Nemo", "Giuseppe", "pesce", "pagliaccio");

// console.log(p1);
// console.log(p2);
// console.log(p3);

// console.log(p1.hasSameOwner(p2));
// console.log(p3.hasSameOwner(p2));


let btn = document.querySelector('button');
let totPets = document.querySelector('#totPets span');




btn.addEventListener("click", (e) => {
    e.preventDefault();
    // let f = document.forms;
    // let f = document.querySelector('form');
    let f = document.querySelectorAll('input, select');
    

    // let petName = f[0].value;
    // let ownerName = f[1].value;
    // let species = f[2].value;
    // let breed = f[3].value;
    // console.log(petName, ownerName, species, breed)

    // let p = new Pet(petName, ownerName, species, breed);
    // console.log(p)
    // console.log(f);
    // console.log(f[2])

    let p = new Pet(f[0].value, f[1].value, f[2].value, f[3].value);
    allPets.push(p)
    addList(p);
    addOption(p);
    totPets.innerHTML = Pet.count;

f[0].value = '';
f[1].value = '';
f[2].value = '';
f[3].value = '';

})

let ul = document.querySelector('.listPet ul');

function addList(p){

    let li = document.createElement('li');
    li.classList.add('list-group-item');
    li.innerHTML = `ID: ${p.count}, Pet name: ${p.petName}, Owner Name: ${p.ownerName}, Specie: ${p.species}, Razza: ${p.breed} `;
    ul.appendChild(li);
    totPets.innerHTML = Pet.count;
}

function addOption(p){
    let select = document.querySelector('#idCount');
    let option = document.createElement('option');
    option.innerText = p.count;
    option.value = p.count;
    select.appendChild(option)
}

let cambia = document.querySelector('#cambia');

cambia.addEventListener( 'click', (e) => {
    e.preventDefault()
    let f2 = document.forms[1];

    console.log(f2)

    let id = f2[0].value;
    let newOwner = f2[1].value;
console.log(id)


    let toModify = allPets.find(pet => {
        return pet.count == id;
    });

    // console.log(toModify)
    toModify.ownerName = newOwner;

    ul.children[id].innerHTML = `ID: ${toModify.count}, Pet name: ${toModify.petName}, Owner Name: ${toModify.ownerName}, Specie: ${toModify.species}, Razza: ${toModify.breed} `;
  
}
)