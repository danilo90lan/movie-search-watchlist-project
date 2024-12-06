import React from "react";
import { useWatchlist } from "../context/WatchListContext";

export default function Watchlist() {
    const { watchlist, removeFromWatchlist } = useWatchlist();

    return (
        <div>
            <h2>Your Watch List</h2>
            {watchlist.length === 0 ? (
                <p>Your watchlist is empty. Add some movies.</p>
            ) : (
                <ul>
                    {watchlist.map((movie, index) => (
                        <li key={index}>
                            {movie.Title} ({movie.Year})
                            <img
                                src={movie.Poster}
                                alt={`${movie.Title} Poster`}
                            />
                            <button
                                onClick={() => removeFromWatchlist(movie.imdbID)}
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