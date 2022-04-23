import React, { useEffect, useState } from "react";
import MovieSlider from "../components/MovieSlider";
import { useParams } from "react-router-dom";
import MovieMain from "../components/MovieMain";
import ActorSection from "../components/ActorSection";
import Loader from "../components/Loader";
import { serverPath } from "../App";
import "flowbite";

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
      <>
        <Loader />
      </>
    );
  }

  return (
    <>
      <DataContext.Provider value={arrays}>
        <div className="bg-gray-100 relative z-20">
          {/* TODO reduce image res */}
          <div
            className="bg-black bg-cover bg-center lg:bg-[center_bottom_32rem] w-[100vw] max-w-full h-[19rem] align-top absolute top-0 left-0 -z-10 brightness-[0.35] shadow-2xl shadow-slate-500"
            style={{
              backgroundImage: `url(${
                "https://www.themoviedb.org/t/p/original" +
                arrays.dataDetail?.backdrop_path
              })`,
            }}
          ></div>
          <div className="flex flex-wrap flex-col w-full sm:w-9/12 sm:m-auto pt-32 sm:pt-48 z-10">
            <MovieMain data={arrays} />
            <div className="flex flex-col items-center xl:items-start">
              <h1 className="w-9/12 text-center xl:text-left mt-12 tracking-wide border-b-2 pb-[2px] border-slate-400 md:border-slate-300">
                Oyuncular
              </h1>
            </div>
            <ActorSection data={arrays.dataCredits} />
          </div>
          <div className="flex flex-col items-center">
            <h1 className="w-9/12 text-center mt-12 tracking-wide border-b-2 pb-[2px] border-slate-400 md:border-slate-300">
              Benzer Filmler
            </h1>
          </div>
          <div className="m-4">
            <MovieSlider movieId={id} />
          </div>
        </div>
      </DataContext.Provider>
    </>
  );
}
