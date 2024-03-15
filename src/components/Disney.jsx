import React, { useState, useEffect } from "react";

const Disney = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://www.omdbapi.com/?apikey=41088039&s=disney")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search);
      })
      .catch((error) => console.error("Errore del fetch:", error));
  }, []);

  return (
    <div className=" w-100 row row-cols-12 row-cols-xs-6 row-cols-md-8 row-cols-lg-12">
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

export default Disney;
