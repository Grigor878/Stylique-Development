import axios from "axios";

export default axios.create({
    baseURL: "https://uselessfacts.jsph.pl/random.json",
});