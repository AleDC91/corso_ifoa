let xhr = new XMLHttpRequest();

xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
xhr.send();
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    // controllo che la chiamata sia terminata e che sia terminata con successo
    console.log("operation is complete");
    let json = xhr.responseText; // tramite responseText ho accesso al json che mi invia il server
    let obj = JSON.parse(json); // faccio il parse del json e lo trasformo in un array di oggetti JS
    console.log(obj);
  }
};

// METODO GET
// ----------

fetch("https://jsonplaceholder.typicode.com/users", { method: "GET" })
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.log("errore" + err));

// METODO POST
// -----------

fetch("https://jsonplaceholder.typicode.com/users", {
  method: "POST",
  body: JSON.stringify({
    nome: "Ale",
    cognome: "DC",
  }),
  headers: {
    "Content/Type": "application/json",
  },
});

// METODO PUT
// ----------

fetch("https://jsonplaceholder.typicode.com/users/3", {
  method: "PUT",
  body: JSON.stringify({
    nome: "Ale",
    cognome: "DC",
  }),
  headers: {
    "Content/Type": "application/json",
  },
});

// METODO DELETE
// -------------

fetch("https://jsonplaceholder.typicode.com/users/3", {
  method: "DELETE",
});

// -------------------------------
// ----------PROMISES-------------
// -------------------------------

let promise = fetch("https://jsonplaceholder.typicode.com/users");
console.log(promise); // Promise {<pending>};

// altro codice

// altro codice

// altro codice

// poi quando voglio accedo al dato!
// separo il momento in cui faccio la chiamata e quando utilizzo il dato! Potente
promise
  .then((response) => console.log(response))
  .catch((err) => console.log(err));

// -----------------------
// -----ASYNC / AWAIT-----
// -----------------------

function func() {
  let arr = [];
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) => (arr = json));
  console.log(arr);
}
func(); // mi restituisce un arr vuoto, perchè la funzione fetch è asincrona,
// quindi mi fa il console log quando ancora non ho i dati

// LA MODIFICO IN QUESTO MODO PER RENDERE SINCRONA FETCH()
// E ASPETTARE I DATI PER RIEMPIRE L'ARRAY

async function func2() {
  let arr = [];
  await fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) => (arr = json));
  console.log(arr);
}
func2();

// posso scriverla anche in maniera differente

async function func3() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  let arr = await response.json();
  console.log(arr);
}

func3();

//  esempio chiamata api pexels

fetch("https://api.pexels.com/v1/curated", {
  method: "GET",
  headers: {
     Authorization: "XXsvcGH1EIwWH0ho9NV2PtjRddu12jB3ZFYGBBdgQcXveLxFnlftXhTB",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json.photos))
  .catch((err) => console.log(err));
