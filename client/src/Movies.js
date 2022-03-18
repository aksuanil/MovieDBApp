import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import MovieSlider from "./components/MovieSlider";
import { useParams } from "react-router-dom";
import MovieMain from './components/MovieMain';
import ActorSection from "./components/ActorSection";
import Loader from "./components/Loader";
import Footer from "./components/Footer";

export const DataContext = React.createContext();

export default function Movies() {
    let { id } = useParams();
    const [arrays, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        fetch("/movies/" + id)
          .then((res) => res.json())
          .then((data) => {
            setData(data);
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            setLoading(false);
          });
      }, []);
  if (loading) {

    return(            
            <>
                <Header/>
                <Loader/>
            </>
        )};

    return (
        <>
        <DataContext.Provider value={arrays}>
        <Header/>
            <div className="flex flex-wrap flex-col w-full sm:w-9/12 sm:m-auto pt-32 sm:pt-48 ">
            <MovieMain data={arrays}/>
            <div className="flex flex-col items-center">
              <h1 className="w-9/12 text-center md:text-left mt-12 tracking-wide border-b-2 pb-[2px] border-slate-400 md:border-slate-300">Oyuncular</h1>
            </div>
            <ActorSection data={arrays.dataCredits}/>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="w-9/12 text-center mt-12 tracking-wide border-b-2 pb-[2px] border-slate-400 md:border-slate-300">Benzer Filmler</h1>
            </div>
            <div className="m-4">
            <MovieSlider movieId={id}/>
            </div>
        </DataContext.Provider>
        <Footer/>
        </>
    )
}
