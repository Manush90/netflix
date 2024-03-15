import React, { useState, useEffect } from "react";

const Potter = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://www.omdbapi.com/?apikey=41088039&s=potter")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search);
      })
      .catch((error) => console.error("Errore del fetch:", error));
  }, []);

  return (
    <div className="d-flex w-100">
      {movies.slice(0, 6).map((movie, index) => (
        <div
          key={index}
          className="card mx-1 border-0"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        >
          <img className="card-img-top" src={movie.Poster} alt={movie.Title} />
        </div>
      ))}
    </div>
  );
};

export default Potter;
