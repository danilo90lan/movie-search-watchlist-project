import axios from "axios";
import React, { useState } from "react";
import ListMovies from "../component/ListMovies";

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
            console.log(response);
            if (response.data.Response === "True") {
                setMovies(response.data.Search);
            }
            else {
                alert("Movie not found!");
            }

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

            <div>
                {

                    movies.map((movie, index) => (
                        <ListMovies movie={movie} key={index} />
                    ))

                }
            </div>



        </div>
    )
}
