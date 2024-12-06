//import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import WatchlistProvider from "./context/WatchListContext";
import Watchlist from "./pages/Watchlist";

function App() {

  return (
    <WatchlistProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watchlist" element={<Watchlist/>} />
          <Route path="/details/:id" element={<div>Details</div>} />
        </Routes>
      </Router>
    </WatchlistProvider>

  )
}

export default App
