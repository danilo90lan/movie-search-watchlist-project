import { Link } from "react-router-dom";
import { useWatchlist } from "../context/WatchListContext";

export default function ListMovies(props) {
    const { movie } = props;
    const { watchlist, addToWatchlist } = useWatchlist();

    // it returns true or false if the item is found
    const isInWatchlist = watchlist.some((item) => item.imdbID === movie.imdbID);

    return (
        <div className="col-md-4 movie-card" style={{ maxWidth: "18rem" }}>
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
            <img src={movie.Poster} alt={`${movie.Title} Poster`} />
            <button
                // it's a javascript statement incorporated in htm/css tag attribute class name
                className={`${isInWatchlist ? "btn btn-success" : "btn btn-primary"}`}
                onClick={() => addToWatchlist(movie)}
                disabled={isInWatchlist}
                > 
                {/* visualize this string button based on the value */}
                {`${isInWatchlist ? "Added in watchlist" : "Add to Watchlist"}`}</button>
                

            <Link to={`/details/${movie.imdbID}`} className="btn btn-primary">View Details</Link>
        </div>


    )
}