import React, { useState, useEffect } from "react";

const Marvel = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://www.omdbapi.com/?apikey=41088039&s=marvel")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search);
      })
      .catch((error) => console.error("Errore del fetch:", error));
  }, []);

  return (
    <div className="row row-cols-2 row-cols-sm-3 row-cols-md-6 row-cols-lg-6 row-cols-xl-6">
      {movies.slice(0, 6).map((movie, index) => (
        <div key={index} className="col mb-2">
          <div className="card border-0">
            <img className="card-img-top" src={movie.Poster} alt={movie.Title} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Marvel;
