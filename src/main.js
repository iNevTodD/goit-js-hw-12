import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import getImagesByQuery from "./js/pixabay-api.js";
import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions.js";

const formInput = document.querySelector(".form-input");
const form = document.querySelector(".form");


form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (formInput.value.trim() === "") {
        return;
    }

    clearGallery();
    showLoader();

    getImagesByQuery(formInput.value.trim())
        .then((data) => {
            if (data.hits.length === 0) {
                throw new Error("Sorry, there are no images matching your search query. Please try again!");
            }
            createGallery(data.hits);
        })
        .catch((error) => {
            iziToast.error({
                title: "Error",
                message: error.message
            });
        }).finally(() => {
            hideLoader();
        })

})