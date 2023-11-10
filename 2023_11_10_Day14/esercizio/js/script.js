let cardsContainer = document.querySelector(".schede");
let extracted = [];

generaTabellone();

function generaTabellone() {
  let tabellone = document.querySelector("#tabellone");
  for (let i = 0; i < 76; i++) {
    let cellNumber = document.createElement("div");
    cellNumber.classList.add("cellNumber");
    cellNumber.classList.add(`cellNumber${i + 1}`);
    cellNumber.innerText = i + 1;
    tabellone.appendChild(cellNumber);
  }
}


let extractBtn = document.querySelector("h1 + button");
extractBtn.addEventListener("click", () => {
  extractNumber(76, extracted);
  showExtracted();
  matchNumber();

  //   console.log(extracted);
});

let cards = document.querySelector('input[type="number"]');
// let howManyCards = cards.value;
let cardsBtn = document.querySelector("form button");
// console.log(cardsBtn);
cardsBtn.addEventListener("click", () => {
  buyCards(cards.value);
});

function extractNumber(n, accArr) {
  let emptyBag = checkEmptyBag();
  if (!emptyBag) {
    let number = Math.floor(Math.random() * n) + 1;
    if (!accArr.includes(number)) {
      accArr.push(number);
    } else {
      extractNumber(n, accArr);
    }
  }
}

function checkEmptyBag() {
  if (extracted.length === 76) {
    let endBox = document.querySelector(".end");
    endBox.style.display = "inline-block";
    return true;
  } else {
    return false;
  }
}

function showExtracted() {
  let allNumbers = document.querySelectorAll("#tabellone .cellNumber");
  allNumbers.forEach((num) => {
    // console.log(num.innerText)
    if (extracted.includes(Number(num.innerText))) {
      num.classList.add("extracted");
    }
  });
}

function buyCards(n) {
  for (let i = 0; i < n; i++) {
    let card = document.createElement("div");
    card.classList.add("card");
    card.classList.add(`card${i}`);
    cardsContainer.appendChild(card);
    let inCardNumbers = [];
    for (let j = 0; j < 24; j++) {
      let numberInCard = document.createElement("div");
      numberInCard.classList.add("numberInCard");
      let number = fillCards(76, inCardNumbers);
      numberInCard.innerText = number;
      card.appendChild(numberInCard);
    }
    inCardNumbers = [];
  }
  let form = document.querySelector("form");
  form.style.display = "none";
  extractBtn.removeAttribute('disabled');
}

function fillCards(n, accArr) {
  let number = Math.floor(Math.random() * n) + 1;
  if (!accArr.includes(number)) {
    accArr.push(number);
    return number;
  } else {
    return fillCards(n, accArr);
  }
}

function matchNumber() {
  let allCards = document.querySelectorAll(".schede .card");
//   console.log(allCards);
  allCards.forEach((card) => {
  numbers = card.children;
//   console.dir(numbers);
  for(let i = 0; i<numbers.length; i++){
    let n = Number(numbers[i].innerText);
    // console.log(n);
    if(extracted.includes(n)){
        console.log('match!!!')
        numbers[i].classList.add('match');
    }
  }
    });
}

function checkAmbo (){

}