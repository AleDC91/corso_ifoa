const PEXELS_API_KEY =
  "XXsvcGH1EIwWH0ho9NV2PtjRddu12jB3ZFYGBBdgQcXveLxFnlftXhTB";
const loadImagesButton = document.querySelector("#load-images");
const loadSecondaryImagesButton = document.querySelector(
  "#load-secondary-images"
);

const primaryQuery = "dolomites";
const secondaryQuery = "beer";
const album = document.querySelector(".photos");
const pagination = document.querySelector("ul.pagination");
let perPage = 40;
let currentURL = window.location.href;
const main = document.querySelector("main");
let query = "";
window.addEventListener("load", () => {
  if (currentURL.includes("index.html")) {
    loadImagesButton.addEventListener("click", () => {
      query = primaryQuery;
      loadPhotos(query, 1, perPage);
    });

    loadSecondaryImagesButton.addEventListener("click", () => {
      query = secondaryQuery;
      loadPhotos(query, 1, perPage);
    });

    // hide button
    album.addEventListener("click", (e) => {
      console.log(e.target);
      if (e.target.classList.contains("hide-btn")) {
        e.target.parentNode.parentNode.parentNode.parentNode.parentNode.remove();
        // view button
      } else if (e.target.classList.contains("view-btn")) {
        let id = e.target.dataset.bsTarget;
        fillModal(id);
      }
    });

    // search
    document.forms[0].querySelector("button").addEventListener("click", () => {
      query = document.forms[0][0].value;
      loadPhotos(query, 1, perPage);

    });
  } else if (currentURL.includes("photoInfo.html")) {
    fetchPhoto();
  }
});

function loadPhotos(query, page, perPage) {
  album.innerHTML = "";
  const URI = `https://api.pexels.com/v1/search?query=${query}&page=${page}&per_page=${perPage}`;
  renderPhotos(URI)
}

function fetchPhoto() {
  let searchParams = new URLSearchParams(window.location.search);

  let photoId = searchParams.get("id");

  const photoContainer = document.querySelector("#photo-info");

  fetch(`https://api.pexels.com/v1/photos/${photoId}`, {
    method: "GET",
    headers: {
      Authorization: PEXELS_API_KEY,
    },
  })
    .then((response) => response.json())
    .then((photo) => {
      console.log(photo);
      const card = document.createElement("div");
      card.classList.add("card", "single-photo", "mb-5");
      card.innerHTML = `<img src="${photo.src.landscape}" class="card-img-top" alt=${photo.alt}>
                    <div class="card-body">
                        <h4 class="card-title">${photo.alt}</h4>
                        <h5 class="photo-author">${photo.photographer}</h5>
                        <a href="${photo.photographer_url}" target="_blank" class="btn btn-primary">Visit the photographer page</a>
                    </div>
                    `;
      photoContainer.appendChild(card);
      let photoAvgColor = photo.avg_color;

      photoContainer.parentNode.parentNode.style.backgroundColor =
        photoAvgColor;
    });
}

function fillModal(id) {
  fetch(`https://api.pexels.com/v1/photos/${id}`, {
    method: "GET",
    headers: {
      Authorization: PEXELS_API_KEY,
    },
  })
    .then((response) => response.json())
    .then((photo) => {
      let modal = document.querySelector(".modal");
      modal.querySelector("img").src = photo.src.original;
      modal.querySelector("img").alt = photo.title;
      modal.id = photo.id;
      modal.querySelector("h1").innerText = photo.alt;
      modal.querySelector("h5").innerText = photo.photographer;
      const modalInstance = new bootstrap.Modal(modal);
      modalInstance.show();
    });
}

pagination.addEventListener("click", (e) => {

e.preventDefault();
album.innerHTML = "";
renderPhotos(e.target.href)
// console.log(e.target);


})

function renderPhotos(uri) {
  fetch(uri, {
    method: "GET",
    headers: {
      Authorization: PEXELS_API_KEY,
    }
  })
    .then((response) => response.json())
    .then((data) => {
      const photos = data.photos;
      console.log(photos);
        console.log(data);
      photos.forEach((photo) => {
        const card = document.createElement("div");
        card.classList.add("col-md-4", "col-sm-6");
        card.innerHTML = `
          <div class="card mb-4 shadow-sm">
          <a href="photoInfo.html?id=${photo.id}&title=${photo.alt}&author=${photo.photographer}&authorSite=${photo.photographer_url}&avgColor=${photo.avg_color}">
              <img src="${photo.src.original}" alt="${photo.alt}" class="img-fluid" />
          </a>
              <div class="card-body">
                  <h5 class="card-title">${photo.alt}</h5>
                  <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                          <button type="button" class="view-btn btn btn-sm btn-outline-secondary" data-bs-toggle="modal" data-bs-target="${photo.id}">
                              View
                          </button>
                          <button type="button" class="hide-btn btn btn-sm btn-outline-secondary">
                              Hide
                          </button>
                      </div>
                      <small class="text-muted">${photo.id}</small>
                  </div>
              </div>
          </div>
          `;
        album.appendChild(card);

        
      });
      pagination.innerHTML = "";
      let prev = document.createElement("li");
      prev.classList.add("page-item");
      prev.innerHTML = `<a class="page-link" href="${data.prev_page}">Previous</a>`;
      pagination.appendChild(prev);
      let pages = Math.ceil(data.total_results / data.per_page);
      // console.log(pages);
      for (let i = 1; i <= pages; i++) {
        let pageNumber = document.createElement("li");
        pageNumber.classList.add("page-item");
        if (i === data.page){
          pageNumber.classList.add("active")
        }
        pageNumber.innerHTML = `<a class="page-link" href="https://api.pexels.com/v1/search?query=${query}&page=${i}&per_page=${perPage}">${i}</a>`;
        pagination.appendChild(pageNumber);
      }
      let next = document.createElement("li");
      next.classList.add("page-item");
      next.innerHTML = `<a class="page-link" href="${data.next_page}">Next</a>`;
      pagination.appendChild(next);

    })
}