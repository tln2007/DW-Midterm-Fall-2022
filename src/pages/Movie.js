import React, { useEffect, useMemo, useState }  from "react";
import { useParams } from "react-router";
import axios from "axios";
import Soundtrack from '../components/Soundtrack';
import Backgrounds from "../components/Backgrounds";

function Movie() {
  const { id } = useParams();

  const [movieData, setMovieData] = useState([]);
    useEffect (() => {
   
    axios
      .get(`https://ghibliapi.herokuapp.com/films/${id}`)
      .then(function (response) {
        setMovieData(response.data);
          
      })
      .catch(function (error) {
      });
  }, []);

  const musicData = useMemo (() => {
    return Soundtrack.find((song) => (
      song.id === movieData.title
    ))
  }, [movieData]);

  const imgData = useMemo (() => {
    return Backgrounds.find((image) => (
      image.id === movieData.title

    ))
  }, [movieData]);

  console.log(imgData)

  return (
    <div className="MoviePage">
      {imgData && 
      <div className="MoviePage--background" style={{backgroundImage: `url('/images/${imgData.image.src}')`, backgroundSize: "cover"}}>
        <div className="MoviePage--audio">
          {musicData && 
          <audio autoPlay>
            <source src={`/assets/${musicData.ost.src}`} type={musicData.ost.type}/>
          </audio> }
        </div>
        <div className="MoviePage--title">
          <h2>{movieData.title}</h2>
        </div>
        <div className="MoviePage--content">
          <p>{movieData.description}</p>
        </div>
        <div className="MoviePage--pngs">
          {imgData &&
          <img src={`/images/${imgData.characters.src}`}>
          </img> }
        </div>
        
      </div>}
    
    </div>
  );
}


export default Movie;