import React, { useEffect, useState }  from "react";
import axios from "axios";


function Movie() {
  const [movieData, setMovieData] = useState([]);
    useEffect (() => {
   
    axios
      .get(`https://ghibliapi.herokuapp.com/films`)
      .then(function (response) {
        setMovieData(response.data);
        console.log(response)
          
      })
      .catch(function (error) {
      });
  }, []);

  return (
    <div className="MoviePage">
      <h1>Hi</h1>
      {movieData.map((movieName, i) => {
        if (i === 0) {
          return <h2>{movieName.title}</h2> 
        }
        
      })}
        
    </div>
  );
}

export default Movie;