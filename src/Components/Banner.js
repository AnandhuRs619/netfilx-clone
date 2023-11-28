import React, { useEffect, useState } from 'react';
import { API_KEY,imageUrl } from '../Api/Api';
import axios from '../Api/axios';



const Banner = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
     console.log(response.data.results[8]);
      setMovie(response.data.results[8]);
    });
  }, []);

  return (
    <div style={{backgroundImage : ` url(${movie ? imageUrl + movie.backdrop_path : ``})` }}  className="banner">
      <div className="banner__contents">
      <h1 className="banner__title">{movie ? (movie.original_title || movie.original_name) : ''}</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
        {movie?.overview ? (movie.overview.length > 250 ? movie.overview.slice(0, 250) + "..." : movie.overview) : ''}
         </h1>

      </div>
      <div className="banner--fadeBottom"></div>
    </div>
  );
};

export default Banner;
