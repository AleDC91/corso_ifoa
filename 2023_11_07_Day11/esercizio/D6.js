/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/

console.log("--------------------");
console.log("----Esercizio 1-----");
console.log("--------------------");

function joinStringsUpper(str1, str2) {
  let partStr1 = str1.slice(0, 2);
  let partSrt2 = str2.slice(str2.length - 3, str2.length);
  return partStr1.concat(partSrt2).toUpperCase();
}

console.log(joinStringsUpper("ciaooo", "bububububu"));

/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/

console.log("--------------------");
console.log("----Esercizio 2-----");
console.log("--------------------");

function tenElements() {
  let arr = [];
  for (let i = 0; i < 10; i++) {
    arr.push(Math.floor(Math.random() * 101));
  }
  return arr;
}

console.log(tenElements());

/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
*/

console.log("--------------------");
console.log("----Esercizio 3-----");
console.log("--------------------");

function evenElements(arr) {
  let filtered = [];
  return arr.filter((ele) => ele % 2 === 0);
}

let arr2 = [2, 4, 3, 6, 3, 1, 123, 65, 22];
let evenArr = evenElements(arr2);
console.log(evenArr);

/* ESERCIZIO 4 (forEach)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

console.log("--------------------");
console.log("----Esercizio 4-----");
console.log("--------------------");

function sumElements(arr) {
  let total = 0;
  arr.forEach((ele) => {
    total += ele;
  });
  return total;
}

console.log(sumElements(arr2));

/* ESERCIZIO 5 (reduce)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

console.log("--------------------");
console.log("----Esercizio 5-----");
console.log("--------------------");

function sumReduce(arr) {
  return arr.reduce((tot, current) => tot + current, 0);
}

console.log(sumReduce(arr2));

/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/

console.log("--------------------");
console.log("----Esercizio 6-----");
console.log("--------------------");

function multiplyArr(arr, n) {
  return arr.map((ele) => ele + n);
}

let arr3 = [1, 3, 5, 2, 87, 22, 100];
console.log(multiplyArr(arr3, 3));

/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/

console.log("--------------------");
console.log("----Esercizio 7-----");
console.log("--------------------");
function strLenArr(arr) {
  return (lenArr = arr.map((ele) => ele.length));
}

let strArr = ["ciao", "array", "di", "stringhe"];
console.log(strArr);
console.log(strLenArr(strArr));

/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/

console.log("--------------------");
console.log("----Esercizio 8-----");
console.log("--------------------");

let oddsToHundred = function () {
  let oddsArr = [];
  for (let i = 1; i < 100; i++) {
    if (i % 2 !== 0) {
      oddsArr.push(i);
    }
  }
  return oddsArr;
};

console.log(oddsToHundred());

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 9 (forEach)
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/

console.log("--------------------");
console.log("----Esercizio 9-----");
console.log("--------------------");

let findOldestMovie = function (arr) {
  let minDate = arr[0].Year;
  let oldest = arr[0].Title;
  arr.forEach((movie) => {
    if (movie.Year < minDate) {
      oldest = movie.Title;
    }
  });
  return oldest;
};

console.log(findOldestMovie(movies));

/* ESERCIZIO 10
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/

console.log("--------------------");
console.log("----Esercizio 10----");
console.log("--------------------");

let countMovies = function (arr) {
  count = 0;
  arr.forEach((movie) => count++);
  return count;
};

console.log(countMovies(movies));

/* ESERCIZIO 11 (map)
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/

console.log("--------------------");
console.log("----Esercizio 11----");
console.log("--------------------");

let findTitles = function (arr) {
  return arr.map((movie) => movie.Title);
};

console.log(findTitles(movies));

/* ESERCIZIO 12 (filter)
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/

console.log("--------------------");
console.log("----Esercizio 12----");
console.log("--------------------");

let lastMillenniumMovies = function (arr) {
  return arr.filter((movie) => movie.Year >= 2000);
};
console.log(lastMillenniumMovies(movies));

// se volessi solo i titoli
console.log('-----------------------')

let lastMillenniumMoviesTitles = function (arr) {

    let millenniumTitles = [];
   arr.forEach(movie => {
    if (movie.Year >= 2000) {
      millenniumTitles.push(movie.Title);
    }
  });
  return millenniumTitles;
};
console.log(lastMillenniumMoviesTitles(movies));

/* ESERCIZIO 13 (reduce)
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/

console.log("--------------------");
console.log("----Esercizio 13----");
console.log("--------------------");

function sumMovieYears(arr){
  let sum = arr.reduce((total, current) => {
    let year = parseInt(current.Year)
    total + year, 0
  });
  return sum;
}

console.log(sumMovieYears(movies));

/* ESERCIZIO 14 (find)
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/


console.log("--------------------");
console.log("----Esercizio 14----");
console.log("--------------------");
function findMovie(arr, code){
  let mov = arr.find(movie => movie.imdbID === code);
  return mov.Title;
}

console.log(findMovie(movies, "tt4154756"))

/* ESERCIZIO 15 (findIndex)
  Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
*/

console.log("--------------------");
console.log("----Esercizio 15----");
console.log("--------------------");

function findMovieIndex(arr, year){
  let ind = arr.findIndex(movie => movie.Year === year);
  return ind;
}

console.log(findMovieIndex(movies, '2012'))