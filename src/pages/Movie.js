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

  // const imgData = useMemo (() => {
  //   return Backgrounds.find((image) => (
  //     image.id === movieData.title
  //   ))
  // }, [movieData]);
  
  console.log(movieData);


  return (
    <div className="MoviePage">
      {musicData && 
      <audio autoPlay>
        <source src={`/assets/${musicData.ost.src}`} type={musicData.ost.type}/>
      </audio> }
   
      {/* <div className="MoviePage--background" style={{backgroundImage: `url('${imgData.image.src}')`, backgroundSize: "cover"}}>
        
      </div>  */}
      
      <h2>{movieData.title}</h2>
      <h2>{movieData.original_title}</h2>
      <p>{movieData.description}</p>
        
    </div>
  );
}

export default Movie;