import React from 'react'
import personImg from '../img/person-placeholder.png'

export default function ActorCard(params) {
  return (
    <a className="w-24 sm:w-28 rounded-lg overflow-hidden shadow-slate-500 shadow-lg mt-6 ">
    <img className=' opacity-100 hover:opacity-80 transition duration-300 ease-in-out ' src={`${params.data?.profile_path ? ("https://www.themoviedb.org/t/p/w600_and_h900_bestv2" + params.data?.profile_path) : personImg }`} />
    <div className="bg-orange-200 bg-opacity-70  h-full p-2 pt-1">
      <p className="text-xs sm:text-xs font-bold">{params?.data?.name}</p>
      <p className=" text-xs">{params?.data?.character}</p>
    </div>
  </a> )
}
