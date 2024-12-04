import axios from "axios";
import React, { useState } from "react";

export default function Home() {
    const [query, setQuery] = useState([]);
    const [movies, setMovies] = useState([]);

    const fetchMovies = async () => {
        // using fetch
        // const response = await fetch(`http://www.omdbapi.com/${apikey}/${query}`);

        //using AXIOS
        if (query) {
            const response = await axios.get("http://www.omdbapi.com/", {
                params: {
                    apikey: "93de2e78",
                    s: query.trim()
                }
            });
            setMovies(response.data.Search);
        }
    }


    return (
        <div>
            <h1>Movie Search</h1>
            <form onSubmit={(event) => {
                event.preventDefault();
                fetchMovies()
            }
            }
            >
                <input
                    type="text"
                    placeholder="Search for Movies...."
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    required />

                <button type="submit">Search</button>
            </form>


            <ul>
                {movies.map((movie, index) => {
                    return <li key={index}>
                        <p>{movie.Title}</p>
                        <p>{movie.Year}</p>
                        <img src={movie.Poster} />
                    </li>
                })
                }
            </ul>
        </div>
    )
}
