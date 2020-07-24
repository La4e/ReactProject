import axios from "axios";

export default axios.create({
    baseURL: "https://www.live-rates.com/",
    responseType: "json"
});