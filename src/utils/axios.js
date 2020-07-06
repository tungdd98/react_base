import axios from "axios";
const API_URL = "http://localhost:3000/";

const instance = axios.create({
    baseURL: API_URL,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json; charset=utf-8"
    }
});

instance.defaults.headers.get["Content-Type"] = "application/json";
instance.defaults.headers.post["Content-Type"] =
    "application/x-www-form-urlencoded";

export default instance;
