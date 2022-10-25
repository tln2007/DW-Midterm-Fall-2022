import React from "react";

function MovieCard({ movie }) {


    return (
        <div className="MovieCard">
            <div className="MovieCard--poster">
                <a href={`/movie/${movie.id}`}><img src = {movie.image}></img></a>
            </div>
            

        </div>
    );
}

export default MovieCard;