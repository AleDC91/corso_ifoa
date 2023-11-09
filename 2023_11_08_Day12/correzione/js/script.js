const generateTable = function () {
  let divTableArea = document.querySelector("#tableArea");
  // console.dir(divTableArea);

  let table = document.createElement("table");
  table.style.border = "1px solid black";
  let tr = document.createElement("tr");

  let th1 = document.createElement("th");
  th1.innerText = "Immagine";
  let th2 = document.createElement("th");
  th2.innerText = "Nome Prodotto";
  let th3 = document.createElement("th");
  th3.innerText = "Quantità";
  let th4 = document.createElement("th");
  th4.innerText = "Prezzo";

  tr.appendChild(th1);
  tr.appendChild(th2);
  tr.appendChild(th3);
  tr.appendChild(th4);

  table.appendChild(tr);
  // console.log(table);

  divTableArea.appendChild(table);

  for (let i = 0; i < 5; i++) {
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerHTML =
      "<img src='https://www.psicosocial.it/wp-content/uploads/2020/10/immagine-fissa-si-muove.jpg' width='150px' />";

    tr.appendChild(td1);
    let td2 = document.createElement("td");
    td2.innerText = `prodotto ${i + 1}`;
    tr.appendChild(td2);
    let td3 = document.createElement("td");
    td3.innerText = `quantità ${i + 1}`;
    tr.appendChild(td3);
    let td4 = document.createElement("td");
    td4.innerText = `prezzo ${i + 1}`;
    tr.appendChild(td4);

    table.appendChild(tr);
  }
};
generateTable();
// let body = document.body;
// console.dir(body);

// let h1 = document.querySelector('h1');
// console.dir(h1);

// let ulFirst = document.querySelector('#firstList');
// console.dir(ulFirst)

// ESERCIZIO 12
// ------------

const addRow = function (img, nome, qty, prezzo) {
  let tr = document.createElement("tr");

  let td1 = document.createElement("td");
  td1.innerHTML = `<img src="${img}" width="150px"/>`;
  tr.appendChild(td1);
  let td2 = document.createElement("td");
  td2.innerText = nome;
  tr.appendChild(td2);
  let td3 = document.createElement("td");
  td3.innerText = qty;
  tr.appendChild(td3);
  let td4 = document.createElement("td");
  td4.innerText = prezzo;
  tr.appendChild(td4);

  let table= document.querySelector('#tableArea table');
  table.appendChild(tr);
};

addRow("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGAHrBNbhP1ekNVsU9tiXV_EVSVKgBJb7RGjxMoQoH&s", "immagine nuova", 122, 300)

const hideAllImages = function() {
    const images = document.querySelectorAll("#tableArea table img");
    images.forEach(image => image.style.display = 'none')
    console.log(images)
}
hideAllImages();

// ESERCIZIO 16
// ------------

const deleteVowels = function(){
    let all = document.querySelectorAll("h1, p, h2, h3, li, th, td, a");
    let vocali = ["a", "e", "i", "o", "u", "y"];

    all.forEach(node => {
        node.innerText = [...node.innerText].filter(char => {
            char = char.toLowerCase();
            return char!== "a" && char!== "e" && char!== "i" && char!== "o" && char!== "u" 
        }).join("")

    })
}

deleteVowels()