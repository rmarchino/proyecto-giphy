import axios from "axios";

const giphyAxios = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs/'
});

export default giphyAxios;