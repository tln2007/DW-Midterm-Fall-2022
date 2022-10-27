import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard.js"

function Home() {
 const [movieData, setMovieData] = useState([]);
  useEffect (() => {
   
    axios
        .get(`https://ghibliapi.herokuapp.com/films`)
        .then(function (response) {
          setMovieData(response.data);
          
        })
        .catch(function (error) {
        });
  }, []);

  const filteredMovies = useMemo(() => movieData.filter((movie) => {
    if(movie.title !== "The Red Turtle" && movie.title !== "Earwig and the Witch") return movie;
  }), [movieData])

  return (
    <div className="background">
      <h1>STUDIO GHIBLI FILMS</h1>
      <div className="MovieCardWrapper">
        {filteredMovies.map((movie, i) => (
          <MovieCard movie={movie} key={i} />
      ))}
      </div>
    </div>
  );
}

export default Home;