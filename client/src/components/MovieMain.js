import React, { useContext } from 'react'
import '../../src/dist/css/output.css'
import CrewSection from './CrewSection'
import RatingStar from './RatingStar'
import { DataContext } from '../Movies'

export default function MovieMain() {
  const data = useContext(DataContext)
  return (
<div>
  <div className="bg-black bg-cover bg-[center_bottom_21rem] lg:bg-[center_bottom_32rem] w-full h-96 align-top absolute top-0 left-0 -z-10 brightness-[0.35] shadow-2xl shadow-slate-500" style={{ 
      backgroundImage: `url(${'https://www.themoviedb.org/t/p/original' + data.dataDetail?.backdrop_path})`
    }} />
    <div className="flex flex-wrap flex-row lg:rounded-3xl lg:w-full justify-center lg:justify-start ">
      <img className="rounded-2xl w-[15rem] h-fit shadow-lg shadow-slate-500" src={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2" + data.dataDetail?.poster_path} /> 
      <div className="w-9/12 text-black lg:justify-start">
          <div className="flex flex-row mt-3 m-auto lg:m-0 justify-center md:justify-start">
              <h3 className="text-center text-3xl lg:text-white lg:pl-8 font-semibold">{data.dataDetail?.title}</h3>
              <div className="flex items-center">
              <a href={"https://www.imdb.com/title/" + data.dataDetail?.imdb_id} target="_blank" className="flex items-center justify-center bg-yellow-400 h-8 w-14  md:h-[28px] md:w-14 rounded-md ml-4 pl-1 pr-1 font-bold">IMDb</a>
              </div>
          </div>
          <div className="flex flex-row mt-2 justify-center sm:justify-start lg:text-white lg:pb-0">
            <p className="lg:pl-8">{data.dataDetail?.vote_average}</p>
            <p className="pl-4">
              <p>              
                {data.dataDetail?.genres?.map(item =>
                item.name + " " 
              )}
              </p>
            </p>
            <p className="pl-4">{data.dataDetail?.runtime} dakika</p>
          </div>
          <div className='pl-8 pt-3'>
            <RatingStar data={data.dataDetail?.vote_average}/>
          </div>
          <div className="flex flex-row lg:mt-[50px]">
            <p className="lg:pl-8 text-justify text-black font-normal">{data.dataDetail?.overview}</p>
          </div>
          <div className='flex flex-col md:flex-row items-center mt-6 gap-4 lg:gap-8 lg:ml-8 justify-center lg:justify-start'>
          <CrewSection data={data.dataCrew}/>
          </div>
      </div>
  </div>
  </div>

  )
}
