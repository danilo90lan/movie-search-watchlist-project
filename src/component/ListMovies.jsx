export default function ListMovies(props) {
    const {movies} = props;
    return (
        <div>
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