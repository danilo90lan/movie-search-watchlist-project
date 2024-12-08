import React from "react";
import { useWatchlist } from "../context/WatchListContext";
import { useNavigate } from "react-router-dom";

export default function Watchlist() {
    const { watchlist, removeFromWatchlist } = useWatchlist();
    const navigate = useNavigate();

    return (
        <div>
            <button className="btn btn-secondary mb-3" onClick={() => navigate(-1)}>Go back</button>
            <h2>Your Watch List</h2>
            {watchlist.length === 0 ? (
                <p>Your watchlist is empty. Add some movies.</p>
            ) : (
                <ul>
                    {watchlist.map((movie) => (
                        <li key={movie.imdbID}>
                            <h2>{movie.Title}</h2> <p>{movie.Year}</p>
                            <img
                                src={movie.Poster}
                                alt={`${movie.Title} Poster`}
                            />
                            <button
                                onClick={() => removeFromWatchlist(movie.imdbID)}
                                style = {{color: "red"}}
                            >
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}