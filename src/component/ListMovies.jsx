export default function ListMovies(props) {
    const { movie } = props;

    return (
        <div className="col-md-4 movie-card">
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
            <img src={movie.Poster} alt={`${movie.Title} Poster`} />
        </div>


    )
}