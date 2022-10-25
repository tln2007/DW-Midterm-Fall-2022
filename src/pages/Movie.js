import React, { useEffect, useMemo, useState }  from "react";
import { useParams } from "react-router";
import axios from "axios";
import Soundtrack from '../components/Soundtrack';

function Movie() {
  const { id } = useParams();


  const [movieData, setMovieData] = useState([]);
    useEffect (() => {
   
    axios
      .get(`https://ghibliapi.herokuapp.com/films/${id}`)
      .then(function (response) {
        setMovieData(response.data);
        console.log(response)
          
      })
      .catch(function (error) {
      });
  }, []);

  const musicData = useMemo (() => {
    return Soundtrack.find((song) => (
      song.id === movieData.title
    ))
  }, [movieData]);
console.log(musicData);

  return (
    <div className="MoviePage">
      {musicData && 
      <audio autoPlay>
        <source src={`/assets/${musicData.ost.src}`} type={musicData.ost.type}/>
      </audio> }
      <h1>{movieData.title}</h1>
        
    </div>
  );
}

export default Movie;