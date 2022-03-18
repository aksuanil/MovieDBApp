import React from 'react'

export default function MovieCard(props) {
  return (
    <div className=" max-w-xs bg-themecolors-darkred rounded-b-2xl mb-8 hover:shadow-gray-800 hover:shadow-xl"> 
        <div className="text-center ">
            <div className="p-4 bg-gradient-to-t from-slate-600 ">
            <a href={/movies/ + props.data.id }><img className="rounded-sm rounded-t-lg border-b-4 border-b-slate-800 shadow-lg shadow-slate-800 hover:shadow-xl hover:shadow-black hover:scale-110 transition duration-300 ease-in-out " src={"https://www.themoviedb.org/t/p/w300_and_h450_bestv2" + props.data.poster_path} /> </a>
            </div>
            <div className=" pt-2 bg-gradient-to-b from-slate-700  border-t-slate-800 shadow-black rounded-b-lg">
            <a href={/movies/ + props.data.id }> <p className='font-semibold'> {props.data.title} </p> </a>
            <div className="flex pt-1 pb-4 justify-center gap-6 ">
                <p className='flex flex-col items-center'> 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <div className='flex'>                  
                  {props.data.vote_average} 
                  Puan</div>
                </p>
                <p className='flex flex-col items-center'> 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z" clipRule="evenodd" />
                  </svg>
                  <div className='flex'>                  
                  {props.data.vote_count} 
                  Oy Sayısı</div>
                </p>
            </div>
            </div>
        </div>
    </div>
  )
}
