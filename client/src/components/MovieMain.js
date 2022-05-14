import React, { useContext } from 'react'
import CrewSection from './CrewSection'
import RatingStar from './RatingStar'
import { DataContext } from '../pages/Movies'

export default function MovieMain() {
  const data = useContext(DataContext)
  return (
<div>
    <div className="flex flex-wrap flex-row lg:rounded-3xl w-full justify-center xl:justify-start ">
      <img className="rounded-2xl w-[15rem] h-fit shadow-lg shadow-slate-500" src={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2" + data.dataDetail?.poster_path} /> 
      <div className="w-9/12 text-black justify-center lg:justify-start">
          <div className="flex flex-row mt-3 m-auto xl:m-0 justify-center lg:justify-start">
              <h3 className="text-center text-3xl xl:text-white lg:pl-8 font-semibold">{data.dataDetail?.title}</h3>
              <div className="flex items-center">
              <a href={"https://www.imdb.com/title/" + data.dataDetail?.imdb_id} target="_blank" className="flex items-center justify-center bg-yellow-400 h-8 w-14  md:h-[28px] md:w-14 rounded-md ml-4 pl-1 pr-1 font-bold">IMDb</a>
              </div>
          </div>
          <div className="flex flex-row mt-2 justify-around xl:justify-start gap-4 xl:gap-8 xl:text-white xl:ml-8 xl:w-fit 2xl:w-fit xl:tracking-wide xl:border-b-2  xl:border-slate-500">
            <p className="text-center font-semibold xl:text-left tracking-wide border-b-2 border-slate-400 xl:border-transparent whitespace-nowrap">
              <p>              
                {data.dataDetail?.genres?.slice(0, 2).map(item =>
                item.name + " " 
              )}
              </p>
            </p>
            <p className="text-center font-semibold xl:text-left tracking-wide border-b-2 pb-[2px] w-1/6 border-slate-400 xl:border-transparent">{data.dataDetail?.vote_average}</p>
            <p className="text-center font-semibold xl:text-left tracking-wide border-b-2  border-slate-400 xl:border-transparent whitespace-nowrap">{data.dataDetail?.runtime} dakika</p>
          </div>
          <div className='flex justify-center xl:justify-start pt-3 sm:pl-8 '>
            <RatingStar data={data.dataDetail?.vote_average}/>
          </div>
          <div className="flex flex-row mt-4 xl:mt-[50px]">
            <p className="lg:pl-8 text-justify subpixel-antialiased text-black font-normal ">{data.dataDetail?.overview}</p>
          </div>
          <div className='flex flex-col md:flex-row items-center mt-6 gap-4 lg:gap-8 lg:ml-8 justify-center lg:justify-start'>
          <CrewSection data={data.dataCrew}/>
          </div>
      </div>
  </div>
  </div>

  )
}
