import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./requests";
import "./banner.css"


const base_url = "https://image.tmdb.org/t/p/original/";

const Banner = () => {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]
            ); // gives a random movie from netflix originals

            return request;
        }
        fetchData();
    }, []);

    // console.log(movie);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str
    }


    return (
        <div>
            <header className="banner"
                style={{
                    backgroundSize: "cover",
                    backgroundImage: `url(${base_url}${movie?.backdrop_path})`
                }}
            >
                <div className="banner_content">
                    <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>

                    <div className="banner_btns">
                        <button className="banner_btn">Play</button>
                        <button className="banner_btn">My List</button>
                    </div>

                    <h1 className="banner_desc">{truncate(movie?.overview, 150)}</h1>

                </div>

                <div className="banner_fadeBottom">

                </div>
            </header>
        </div>
    );
};

export default Banner;
