// Data Types;
// string - number - boolean
var str;
var num;
var bool;
var und;
var nul;
var all;
/* let nev : never; */
var nome = 'Mario Rossi';
// Union
var u;
var g;
str = 'sono una stringa';
num = 25;
bool = true;
und = undefined;
nul = null;
all = 25;
all = 'ciao';
all = true;
/* nev = function () {
    throw new Error('Error');

} */
u = 'Mario';
u = undefined;
g = 'Mario';
g = undefined;
// Strutture Dati Typescript
// Array
var arr = [];
arr.push('ciao');
// Object
var User = /** @class */ (function () {
    function User(firstname, lastname, city) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.city = city;
    }
    return User;
}());
var Admin = /** @class */ (function () {
    function Admin(firstname, lastname, city, email) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.city = city;
        this.email = email;
    }
    return Admin;
}());
var obj = new User('Mario', 'Rossi', 'Roma');
var admin = new Admin('Giuseppe', 'Verdi', 'Napoli', 'g.verdi@example.com');
var literal = {
    firstname: 'Francesca',
    lastname: 'Neri',
    city: 'Milano',
    //email: 'f.neri@example.com'
};
var func = function (obj) {
    console.log(obj.firstname, obj.lastname, obj.city);
};
func(obj);
func(admin);
func(literal);
var userlist = [];
userlist.push(obj);
userlist.push(admin);
userlist.push(literal);
// Enum
var Giorno;
(function (Giorno) {
    Giorno[Giorno["LUNEDI"] = 0] = "LUNEDI";
    Giorno[Giorno["MARTEDI"] = 1] = "MARTEDI";
    Giorno[Giorno["MERCOLEDI"] = 2] = "MERCOLEDI";
    Giorno[Giorno["GIOVEDI"] = 3] = "GIOVEDI";
    Giorno[Giorno["VENERDI"] = 4] = "VENERDI";
    Giorno[Giorno["SABATO"] = 5] = "SABATO";
    Giorno[Giorno["DOMENICA"] = 6] = "DOMENICA";
})(Giorno || (Giorno = {}));
var giorno = 6;
// Function
function sum(x, y) {
    return x + y;
}
var sum2 = function (x, y) {
    return x + y;
};
// Generics
var Test = /** @class */ (function () {
    function Test(name, num) {
        this.name = name;
        this.num = num;
    }
    return Test;
}());
var t1 = new Test('ciao', 25);
var t2 = new Test(25, 15);
var t3 = new Test(true, 25);
var t4 = {
    name: 'Mario',
    num: '25'
};
