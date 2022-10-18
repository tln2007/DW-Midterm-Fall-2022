import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard.js"

function Home() {
 // const [setMovie] = 
  useEffect (() => {
   
    axios
        .get(`https://ghibliapi.herokuapp.com/species?name=spirit`)
        .then(function (response) {
          
          console.log(response)
        })
        .catch(function (error) {
          //console.warn(error);
            
        });
  }, []);

  return (
    <h1> Hi</h1>
  )
}
  

export default Home;