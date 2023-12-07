let books = JSON.parse(localStorage.getItem("books"));
let container = document.querySelector(".main-container");
let pallino = document.querySelector(".pallino");
let showCart = document.querySelector(".show-cart");
let cartButton = document.querySelector(".carrello");
let priceSpot = document.querySelector(".carrello h6");
showHideCart();

let itemsInCart = [];

if (books) {
  createCards(books);
  listenButtonsEvents(books);
  itemsInCart = addToCart(books);
  pallino.innerText = itemsInCart.length;
  fillCart(itemsInCart);
  fillPrice(itemsInCart);
  removeItemFromCart(itemsInCart);
} else {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://striveschool-api.herokuapp.com/books");
  xhr.send();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let downloadedBooks = JSON.parse(xhr.responseText);
      //   console.log(books);
      localStorage.setItem("books", JSON.stringify(downloadedBooks));

      booksStrani = localStorage.getItem("books");
      books = JSON.parse(booksStrani);
      //   console.log(books)

      //   console.log(books + "ciao da xml");

      listenButtonsEvents(books);
      itemsInCart = addToCart(books);

      //   console.log(itemsInCart + 'ciao da xml')
      pallino.innerText = itemsInCart.length;
      // console.log(itemsInCart + 'ciao')
      createCards(books);
      fillCart(itemsInCart);
      fillPrice(itemsInCart);
      removeItemFromCart(itemsInCart);
    }
  };
}

function createCards(books) {
  books.forEach((book) => {
    let card = document.createElement("div");
    card.id = book.asin;
    card.classList.add("card");
    card.classList.add(
      "col-12",
      "col-sm-6",
      "col-md-4",
      "col-lg-3",
      "col-xl-2"
    );

    let cardImg = document.createElement("img");
    cardImg.src = book.img;
    cardImg.classList.add("card-img-top");
    cardImg.alt = book.title;

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    let cardTitle = document.createElement("h6");
    cardTitle.classList.add("card-title");
    cardTitle.innerText = book.title;

    let info = document.createElement("div");
    info.classList.add("info");

    let price = document.createElement("p");
    price.innerText = book.price;

    let dropButton = document.createElement("button");
    dropButton.classList.add("btn", "btn-danger", "drop-btn");
    dropButton.innerText = "Elimina";

    let buyButton = document.createElement("button");
    buyButton.classList.add("btn", "btn-success", "buy-btn");
    buyButton.innerText = "Compra";

    info.appendChild(price);
    info.appendChild(dropButton);
    info.appendChild(buyButton);

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(info);
    card.appendChild(cardImg);
    card.appendChild(cardBody);
    container.appendChild(card);

    if (book.cart) {
      card.classList.add("inCart");
    }
  });
}

function listenButtonsEvents(books) {
  container.addEventListener("click", (e) => {
    if (e.target.classList.contains("drop-btn")) {
      e.target.parentNode.parentNode.parentNode.remove();
    } else if (e.target.classList.contains("buy-btn")) {
      let id = e.target.parentNode.parentNode.parentNode.id;
      console.log(id);

      let bookToBuy = books.find((book) => book.asin === id);

      if (bookToBuy && !bookToBuy.cart) {
        // If the book is not already in the cart, update its cart property
        bookToBuy.cart = true;
        e.target.parentNode.parentNode.parentNode.classList.add("inCart");

        localStorage.setItem("books", JSON.stringify(books));

        itemsInCart = addToCart(books);
        pallino.innerText = itemsInCart.length;
        fillCart(itemsInCart);
        fillPrice(itemsInCart);
        console.log(itemsInCart);
      }
    }
  });
}

function addToCart(books) {
  books.forEach((book) => {
    if (book.cart) {
      if (!itemsInCart.includes(book)) {
        itemsInCart.push(book);
      }
    }
  });
  return itemsInCart;
}

function fillCart(itemsInCart) {
  showCart.innerHTML = "";
  itemsInCart.forEach((itemInCart) => {
    let div = document.createElement("div");
    div.classList.add(itemInCart.asin);
    div.classList.add("nel-carrello");
    div.classList.add("card");

    div.innerHTML = `
            <img src=${itemInCart.img} class="card-img-top" alt=${itemInCart.title}>
            <div class="card-body">
                <h5 class="card-title">${itemInCart.title}</h5>
                <div>
                   <p class="card-text">${itemInCart.price}€</p>
                   <a href="#" data-asin="${itemInCart.asin}" class=" btn btn-primary">Rimuovi</a>
                </div>
            </div>
        `;

    showCart.appendChild(div);
  });
}

function showHideCart() {
  cartButton.addEventListener("click", () => {
    if (showCart.style.left == "") {
      showCart.style.left = "150px";
    } else if (showCart.style.left == "-400px") {
      showCart.style.left = "150px";
    } else {
      showCart.style.left = "-400px";
    }
  });
}

function fillPrice(itemsInCart) {
  let total = 0;
  itemsInCart.forEach((item) => {
    total += item.price;
  });

  priceSpot.innerText = total.toFixed(2) + "€";
}

function removeItemFromCart(itemsInCart) {
  showCart.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.localName === "a") {
      // Find the index of the item in itemsInCart based on data-asin
      const index = itemsInCart.findIndex(
        (item) => item.asin === e.target.dataset.asin
      );

      if (index !== -1) {
        // Update the cart property of the corresponding book in the books array
        const bookIndex = books.findIndex(
          (book) => book.asin === e.target.dataset.asin
        );
        if (bookIndex !== -1) {
          books[bookIndex].cart = false;
          document
            .getElementById(`${e.target.dataset.asin}`)
            .classList.remove("inCart");

          localStorage.setItem("books", JSON.stringify(books));
        }

        // Remove the item from itemsInCart
        itemsInCart.splice(index, 1);

        // Update UI
        e.target.parentNode.parentNode.parentNode.remove();
        pallino.innerText = itemsInCart.length;
        fillPrice(itemsInCart);
        fillCart(itemsInCart);
      }
    }
  });
}
