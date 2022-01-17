import axios from "axios";

export const axiosConfig = () => {
    axios.defaults.headers.common["Access-Control-Allow-Origin"] = "https://accounts.spotify.com"
}