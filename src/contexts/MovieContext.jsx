import { createContext, useContext, useEffect, useState } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({children}) => {

    const [Favorites, setFavorites] = useState([])

    useEffect(() => {
        const storedFavs = localStorage.getItem('favorites')
        if (storedFavs) {
            setFavorites(JSON.parse(storedFavs))
        }
    },[])

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(Favorites))
    }, [Favorites])

    // Function to add a movie to favorites
    const addToFavorites = (movie) => {
        setFavorites((prev) => [...prev, movie])
    }

    // Function to remove a movie from favorites
    const removeFromFavorites = (movieId) => {
        setFavorites((prev) => prev.filter((movie) => movie.id !== movieId))
    }

    // Function to check if a movie is in favorites
    const isFavorite = (movieId) => {
        return Favorites.some((movie) => movie.id === movieId)
    }

    const value = {
        Favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }

    return <MovieContext.Provider value={value}>
        
        {children }
    </MovieContext.Provider>
}