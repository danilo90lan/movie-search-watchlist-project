export default function ListMovies(props) {
    const { movie } = props;

    return (
        <div>
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
            <img src={movie.Poster} alt={`${movie.Title} Poster`} />
        </div>


    )

}