import { useWatchlist } from "../context/WatchListContext";

export default function ListMovies(props) {
    const { movie } = props;
    const { addToWatchlist } = useWatchlist();

    return (
        <div className="col-md-4 movie-card" style={{maxWidth: "18rem"}}>
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
            <img src={movie.Poster} alt={`${movie.Title} Poster`} />
            <button onClick={
                () => addToWatchlist(movie)}> Add to WatchList</button>
        </div>


    )
}