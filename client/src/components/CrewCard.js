import React from 'react'
import personImg from '../img/person-placeholder.png'

export default function CrewCard(props) {
  return (
    <div className="flex items-center mr-4">
        <div className="flex items-center justify-center h-10 w-10 shadow-slate-500 shadow-lg object-cover	rounded-full overflow-hidden">
          <img className="p-[1px]" src={`${props.data?.url ? ("https://www.themoviedb.org/t/p/w200" + props.data?.url) : personImg }`} />
        </div>
        <div className="ml-2"> {props.data?.name} </div>
      </div>
  )
}
