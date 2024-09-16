import React, { useState, useEffect } from 'react';
import './App.css'; // External CSS for styling
import LoaderTemplate from './Loader';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch('https://www.omdbapi.com/?s=starwars&apikey=263d22d8')
      .then(response => response.json())
      .then(data => {
        if (data.Response === "True") {
          setMovies(data.Search);
        }
      })
      .catch(error => console.log(error));
  }, []);

  // backgroundImage: movie.Poster !== "N/A" ? movie.Poster : "public/logo512.png"
  return (
    <div class="main-container">

   {movies.length===0?<LoaderTemplate/>:
    <div className="movie-container">
      {movies.map((movie) => (
        <a tabindex="0" style={{backgroundImage: movie.Poster !== "N/A" ? `url(${movie.Poster})` : "url(https://i.ytimg.com/vi/PIk1mc3u1tI/maxresdefault.jpg)"}} key={movie.imdbID}  className='movie-card'>
          <div className="movie-info">
            <h3>{movie.Title}</h3>
            <div>Type: {movie.Type}</div>
            <p>Year: {movie.Year}</p>
          </div>
        </a>
      ))}
    </div>}
    </div>
  );
};

export default MovieList;
