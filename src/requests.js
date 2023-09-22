const apiKey = "96c609df7a4e96a5f453db15873207a3"

//base url to make request to movies databse is ==>" https://api.themoviedb.org/3 "<==

const request = { // these are ends of the URIs
    fetchTrending : `/trending/all/week?api_key=${apiKey}&language=en-US`,
    fetchNetflixOriginals : `/discover/tv?api_key=${apiKey}&with_networks=213`,
    fetchTopRated : `/movie/top_rated?api_key=${apiKey}&language=en-US`,
    fetchActionMovies : `/discover/movie?api_key=${apiKey}&with_genres=28`,
    fetchComedyMovies : `/discover/movie?api_key=${apiKey}&with_genres=35`,
    fetchHorrorMovies : `/discover/movie?api_key=${apiKey}&with_genres=27`,
    fetchRomanceMovies : `/discover/movie?api_key=${apiKey}&with_genres=10749`,
    fetchDocumentaries : `/discover/movie?api_key=${apiKey}&with_genres=99`,
}

export default request