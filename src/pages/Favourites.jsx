import "../Css/Favorites.css"
import { useMovieContext } from '../contexts/MovieContext'
import MovieCard from '../Components/MovieCard'

function Favourites() {
    const { Favorites } = useMovieContext()

    // Check if there are any favorite movies
    if (Favorites && Favorites.length > 0) {
        return (
            <div className='favorites'>
                <h2 className='favorites-title'>My Favorite Movies</h2>
                <div className='movies-grid'>
                    {Favorites.map(movie => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
                </div>
            </div>
        )
    }

    // Empty state message if no favorites
    return (
        <div className="favorites-empty">
            <h2>No Favorite Movies Yet ?</h2>
            <p>Start adding your favorite movies now!</p>
        </div>
    )
}

export default Favourites;
