import React from "react";

function MovieCard({ movieName }) {
    return (
        <div className="MovieCard">
            {/* <h2>{movieName.title}</h2> */}
            <div className="MovieCard--poster">
                <img src = {movieName.image}></img>
            </div>
            

        </div>
    );
}

export default MovieCard;