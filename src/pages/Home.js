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
    <div className="background">
      
      <div className="MovieCardWrapper">
        
        {movieData.map((movie, i) => (
          <MovieCard movie={movie} key={i} />
      ))}

      </div>
    </div>
  );
}

export default Home;