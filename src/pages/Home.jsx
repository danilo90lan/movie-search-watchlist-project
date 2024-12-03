import React from "react";

export default function Home() {
    const [query, setQuery] = useState("");

    const fetchMovies = async () => {
        // using fetch
        const response = await fetch(`http://www.omdbapi.com/${apikey}/${query}`);
    }

    return (
        <div>
            <h1>Movie Search</h1>
            <input
                type="text"
                placeholder="Search for Movies...."
            />
            <button>Search</button>
        </div>
    )
}
