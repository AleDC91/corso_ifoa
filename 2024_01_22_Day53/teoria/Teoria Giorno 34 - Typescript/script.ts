// Data Types;
// string - number - boolean
let str : string ;
let num : number ;
let bool : boolean ;
let und : undefined ;
let nul : null;
let all : any;
/* let nev : never; */
let nome = 'Mario Rossi';

// Union
let u: string | undefined

// Custom Types
type tipoCustom = string | undefined | null

let g: tipoCustom;


str = 'sono una stringa'
num = 25;
bool = true;
und = undefined;
nul = null;
all = 25;
all = 'ciao';
all = true

/* nev = function () {
    throw new Error('Error');

} */

u = 'Mario';
u = undefined;

g = 'Mario';
g = undefined;



// Strutture Dati Typescript
// Array

let arr: string[] = []
arr.push('ciao')

// Object

class User {
    firstname: string;
    lastname: string;
    city: string;

    constructor(firstname: string, lastname: string, city: string){
        this.firstname = firstname;
        this.lastname = lastname;
        this.city = city;
    }
}

class Admin {
    firstname: string;
    lastname: string;
    city: string;
    email: string;

    constructor(firstname: string, lastname: string, city: string, email: string){
        this.firstname = firstname;
        this.lastname = lastname;
        this.city = city;
        this.email = email;
    }
}

let obj: User = new User('Mario','Rossi', 'Roma')
let admin: Admin = new Admin('Giuseppe','Verdi', 'Napoli', 'g.verdi@example.com')
let literal: IPerson = {
    firstname: 'Francesca',
    lastname: 'Neri',
    city: 'Milano',
    //email: 'f.neri@example.com'
}

// interfaces
interface IPerson {
    firstname: string;
    lastname: string;
    city: string;
    email?: string;
}

let func = function(obj: IPerson) {
    console.log(obj.firstname, obj.lastname, obj.city)
}

func(obj);
func(admin);
func(literal);

let userlist: IPerson[] = []
userlist.push(obj)
userlist.push(admin)
userlist.push(literal)


// Enum

enum Giorno {
    'LUNEDI',
    'MARTEDI',
    'MERCOLEDI',
    'GIOVEDI',
    'VENERDI',
    'SABATO',
    'DOMENICA'
}

let giorno: Giorno = 6


// Function

function sum(x:number, y:number): number {
    return x + y;
}

const sum2 = (x:number, y:number): number => {
    return x + y;
}

// Generics

class Test<T, K> {
    name: T
    num: K

    constructor(name: T, num: K) {
        this.name = name;
        this.num = num;
    }
}

let t1: Test<string, number> = new Test('ciao', 25);
let t2: Test<number, number> = new Test(25,15);
let t3: Test<boolean, number> = new Test(true, 25);

interface ITest<T, K> {
    name: T
    num: K
}

let t4: ITest<string, string> = {
    name: 'Mario',
    num: '25'
}