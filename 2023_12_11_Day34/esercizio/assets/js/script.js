const PEXELS_API_KEY =
  "XXsvcGH1EIwWH0ho9NV2PtjRddu12jB3ZFYGBBdgQcXveLxFnlftXhTB";
const loadImagesButton = document.querySelector("#load-images");
const loadSecondaryImagesButton = document.querySelector(
  "#load-secondary-images"
);

const primaryQuery = "climbing";
const secondaryQuery = "beer";
const album = document.querySelector(".photos");

let currentURL = window.location.href;
const main = document.querySelector('main')

window.addEventListener("load", () => {
  if (currentURL.includes("index.html")) {
    loadImagesButton.addEventListener("click", () => {
      loadPhotos(primaryQuery);
    });

    loadSecondaryImagesButton.addEventListener("click", () => {
      loadPhotos(secondaryQuery);
    });

    // hide button
    album.addEventListener("click", (e) => {
      console.log(e.target);
      if (e.target.classList.contains("hide-btn")) {
        e.target.parentNode.parentNode.parentNode.parentNode.parentNode.remove();
      }
      else if(e.target.classList.contains("view-btn")){

        
      }
    });

    // search
    document.forms[0].querySelector("button").addEventListener("click", () => {
      loadPhotos(document.forms[0][0].value);
    });
  } else if (currentURL.includes("photoInfo.html")) {
    

    fetchPhoto();

  }
});

function loadPhotos(query) {
  album.innerHTML = "";
  const URI = `https://api.pexels.com/v1/search?query=${query}/`;
  fetch(URI, {
    method: "GET",
    headers: {
      Authorization: PEXELS_API_KEY,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const photos = data.photos;
      console.log(photos);
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
                          <button type="button" class="view-btn btn btn-sm btn-outline-secondary">
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




    });
}

async function fetchPhoto() {
  console.log(currentURL);
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


      photoContainer.parentNode.parentNode.style.backgroundColor = photoAvgColor;
    });
}
