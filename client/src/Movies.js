import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import MovieSlider from "./components/MovieSlider";
import { useParams } from "react-router-dom";
import MovieMain from './components/MovieMain';
import ActorSection from "./components/ActorSection";
import Loader from "./components/Loader";
import Footer from "./components/Footer";
import { serverPath } from "./App";

export const DataContext = React.createContext();

export default function Movies() {
  let { id } = useParams();
  const [arrays, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(serverPath + "movies/" + id)
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
    return (
<<<<<<< HEAD
      <>
        <Header />
        <Loader />
      </>
=======
        <>
        <DataContext.Provider value={arrays}>
        <Header/>

        <div className="bg-gray-100 -z-30 absolute w-screen"> 
        {/* TODO reduce image res */}
        <div className="bg-black bg-cover bg-center lg:bg-[center_bottom_32rem] w-screen h-[19rem] align-top absolute top-0 left-0 -z-20 brightness-[0.35] shadow-2xl shadow-slate-500" style={{ 
          backgroundImage: `url(${'https://www.themoviedb.org/t/p/original' + arrays.dataDetail?.backdrop_path})`
        }}> 
        </div>
            <div className="flex flex-wrap flex-col w-full sm:w-9/12 sm:m-auto pt-32 sm:pt-48">
            <MovieMain data={arrays}/>
            <div className="flex flex-col items-center md:items-start">
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
            <Footer/>
          </div>
        </DataContext.Provider>
        </>
>>>>>>> bf3979892652629bf6015aa94e2f2d51e04041f4
    )
  };
  return (
    <>        

      <DataContext.Provider value={arrays}>
        <Header /> 

        <div className="bg-green-200 w-full min-h-screen absolute -z-20">       

        <div className="bg-black bg-cover bg-[center_bottom_21rem] lg:bg-[center_bottom_32rem] w-full h-80 align-top absolute top-0 left-0 -z-10 brightness-[0.35] shadow-2xl shadow-slate-500" style={{ 
      backgroundImage: `url(${'https://www.themoviedb.org/t/p/original' + arrays.dataDetail?.backdrop_path})`
        }}>

        </div>
        <div className="flex flex-wrap flex-col w-full sm:w-9/12 sm:m-auto pt-32 sm:pt-48 ">
          <MovieMain data={arrays} />
          <div className="flex flex-col items-center">
            <h1 className="w-9/12 text-center md:text-left mt-12 tracking-wide border-b-2 pb-[2px] border-slate-400 md:border-slate-300">Oyuncular</h1>
          </div>
          <ActorSection data={arrays.dataCredits} />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="w-9/12 text-center mt-12 tracking-wide border-b-2 pb-[2px] border-slate-400 md:border-slate-300">Benzer Filmler</h1>
        </div>
        <div className="m-4">
          <MovieSlider movieId={id} />
        </div>
        <Footer />

        </div>

      </DataContext.Provider>
    </>
  )
}
