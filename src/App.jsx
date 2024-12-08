//import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import WatchlistProvider from "./context/WatchListContext";
import Watchlist from "./pages/Watchlist";
import Navbar from "./component/Navbar";
import Details from "./pages/Details";
import NotificationProvider from "./context/NotificationContext";
import NotificationBar from "./component/NotificationBar";

function App() {

  return (
    <NotificationProvider>
      <WatchlistProvider>
        <Router>
          <NotificationBar/>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/watchlist" element={<Watchlist />} />
            <Route path="/details/:id" element={<Details />} />
          </Routes>
        </Router>
      </WatchlistProvider>
    </NotificationProvider>


  )
}

export default App
