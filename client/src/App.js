import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import MovieSlider from "./components/MovieSlider";
import { Route, Routes} from "react-router-dom";
import TopRated from "./TopRated"
import HomePage from "./HomePage"
import Movies from "./Movies"
import Search from "./Search"
import About from "./About"


function App() {
    return (
        <>
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/toprated" element={<TopRated/>} />
            <Route path="/search" element={<Search/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/movies/:id" element={<Movies/>} />
        </Routes>
        </>
    )
}
export default App;