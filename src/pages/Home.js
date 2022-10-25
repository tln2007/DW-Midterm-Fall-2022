import React, { useEffect, useState } from "react";
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

  return (
    <div style={{ backgroundImage: "url(/img/bg.jpg)" }}>
      {movieData.map((movie, i) => (
        <MovieCard movieName={movie} key={i} />
    ))}

    </div>
    
  );
}

export default Home;