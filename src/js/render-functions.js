import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
});

export function createGallery(images) {
    const gallery = document.querySelector(".gallery");

    gallery.innerHTML = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) =>
        `<li class="gallery-item">
            <a class="gallery-link" href="${largeImageURL}">
                <img class="gallery-image" src="${webformatURL}" alt="${tags}" width="360" height="152"/>
            </a>
            <ul class="info">
                <li class="info-item">
                    <h3 class="info-item-title" >Likes</h3>
                    <p class="info-title-value" >${likes}</p>
                </li>
                <li class="info-item">
                    <h3 class="info-item-title" >Views</h3>
                    <p class="info-title-value" >${views}</p>
                </li>
                <li class="info-item">
                    <h3 class="info-item-title" >Comments</h3>
                    <p class="info-title-value" >${comments}</p>
                </li>
                <li class="info-item">
                    <h3 class="info-item-title" >Downloads</h3>
                    <p class="info-title-value" >${downloads}</p>
                </li>
            </ul>
        </li>`
    ).join("");

    lightbox.refresh();
}

export function clearGallery() {
    const gallery = document.querySelector(".gallery");
    gallery.innerHTML = "";
}

export function showLoader() {
    const loader = document.querySelector(".loader");
    loader.classList.add("is-loading");
}

export function hideLoader() {
    const loader = document.querySelector(".loader");
    loader.classList.remove("is-loading");
}