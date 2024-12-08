import React, { createContext, useContext, useState } from "react";
import { useNotification } from "./NotificationContext";

const WatchlistContext = createContext();

export default function WatchlistProvider({ children }) {
    const [watchlist, setWatchlist] = useState([]);
    const { showNotification } = useNotification();

    // Add to WatchList function
    const addToWatchlist = (movie) => {
        setWatchlist((prev) => [...prev, movie]);
        showNotification(`${movie.Title} added to the Watch List`);
    };



    // Delete from Watchlist function
    const removeFromWatchlist = (id) => {
        setWatchlist((prev) => prev.filter((movie) => movie.imdbID != id));
        showNotification(`Movie removed from the Watch List`);
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