import React from "react";

function MovieCard({ movieName }) {
    return (
        <div className="MovieCard">
            {/* <h2>{movieName.title}</h2> */}
            <div className="MovieCard--poster">
                <a href="/movie"><img src = {movieName.image}></img></a>
            </div>
            

        </div>
    );
}

export default MovieCard;