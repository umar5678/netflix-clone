import axios from "axios";

//base url to make request to movies databse is ==>" https://api.themoviedb.org/3 "<==

const instance = axios.create({
    baseURL : "https://api.themoviedb.org/3"
})

// i.e. instance.get("any_end_point") ===>> "https://api.themoviedb.org/3/any_end_point"

export default instance