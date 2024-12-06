import React, { createContext, useContext, useState } from "react";

const WatchlistContext = createContext();

export default function WatchlistProvider({ children }) {
    const [watchlist, setWatchlist] = useState([]);

    // Add to WatchList function
    const addToWatchlist = (movie) => {
        setWatchlist((prev) => [...prev, movie]);
    };



    // Delete from Watchlist function
    const removeFromWatchlist = (id) => {
        setWatchlist((prev) => prev.filter((movie) => movie.imdbID != id));
    };


    return (
        <WatchlistContext.Provider value={{ watchlist, addToWatchlist, removeFromWatchlist }}>
            {children}
        </WatchlistContext.Provider>
        
        ) 
}

export function useWatchlist() {
    //simply return
    //return useContext(WatchlistContext);

    //or check before sending
    let context = useContext(WatchlistContext);
    if (!context) {
        console.log("No movies added");
    }
    return context;
}