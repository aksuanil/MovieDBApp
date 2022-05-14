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
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Aldrich&family=Bungee+Outline&family=Iceberg&family=Karla&family=Nova+Square&family=Spectral:wght@600;700&display=swap" rel="stylesheet" />
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
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