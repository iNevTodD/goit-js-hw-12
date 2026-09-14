import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import axios from "axios";


const API_KEY = "57579078-06f4961acba6fdcc260ac8e17";
const BASE_URL = "https://pixabay.com/api/";

export default function getImagesByQuery(query) {
    return axios.get(BASE_URL, {
        params: {
            key: API_KEY,
            q: query,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true
        },
    }).then(({ data }) => {
        return data;
    }).catch(error => {
        iziToast.error({
            title: "Error",
            message: "Failed to fetch images. Please try again later."
        });
    });
}