import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Details() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [movieDetails, setMovieDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await fetch(`http://www.omdbapi.com/?apikey=93de2e78&i=${id}&plot=full`);
                const data = await response.json();

                if (data.Response === "True") {
                    setMovieDetails(data);

                }
                else {
                    setMovieDetails(null);
                }

            } catch (error) {
                console.error("Failed to fetch movie details", error);
            } finally {
                setLoading(false);
            }
        }


        fetchMovieDetails();
    }, [id]);


    if (loading) {
        return <p>Loading...</p>
    }

    if (!movieDetails) {
        return <p>Movie details not found</p>
    }

    return (
        <div>
            <button className="btn btn-secondary mb-3" onClick={() => navigate(-1)}>Go back</button>
            <div className="title">
                <h2>{movieDetails.Title}</h2>
                <p>{movieDetails.Year}</p>
            </div>

            <div className="card">
                <div>
                    <img
                        src={movieDetails.Poster} />
                </div>

                <div className="plot">
                    <h4>Plot</h4>
                    <p>{movieDetails.Plot}</p>
                    <h4>Actors</h4>
                    <p>{movieDetails.Actors}</p>
                </div>


            </div>

        </div>
    )
}