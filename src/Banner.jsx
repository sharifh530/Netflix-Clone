import React, { useState, useEffect } from "react";

import axios from "./axios";
import request from "./request";

import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const fetchedData = await axios.get(request.fetchNetflixOriginals);
      setMovie(
        fetchedData.data.results[
          Math.floor(Math.random() * fetchedData.data.results.length - 1)
        ]
      );
      return fetchData;
    }
    fetchData();
  }, []);

  console.log(movie);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div>
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        }}
      >
        <div className="banner__contents">
          {/* title */}

          <h1 className="banner__title">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          {/* div > two buttons */}
          <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">My List</button>
          </div>
          <h1 className="banner__description">
            {truncate(movie?.overview, 150)}
          </h1>
        </div>
        <div className="banner__fadeBottom" />
      </header>
    </div>
  );
}

export default Banner;
