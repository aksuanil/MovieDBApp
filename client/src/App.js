import React from "react";
import { Route, Routes } from "react-router-dom";
import TopRated from "./pages/TopRated"
import HomePage from "./pages/HomePage"
import Movies from "./pages/Movies"
import Search from "./pages/Search"
import About from "./pages/About"
import 'typeface-source-sans-pro'
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
    return (
        <>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/toprated" element={<TopRated />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/movies/:id" element={<Movies />} />
                </Routes>
                <Footer />
        </>
    )
}
export const serverPath = 'https://moviedb-app-server.herokuapp.com/'
export default App;