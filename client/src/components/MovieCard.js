import React from 'react'
export const genres = [
{
"id": 28,
"name": "Action"
},
{
"id": 12,
"name": "Adventure"
},
{
"id": 16,
"name": "Animation"
},
{
"id": 35,
"name": "Comedy"
},
{
"id": 80,
"name": "Crime"
},
{
"id": 99,
"name": "Documentary"
},
{
"id": 18,
"name": "Drama"
},
{
"id": 10751,
"name": "Family"
},
{
"id": 14,
"name": "Fantasy"
},
{
"id": 36,
"name": "History"
},
{
"id": 27,
"name": "Horror"
},
{
"id": 10402,
"name": "Music"
},
{
"id": 9648,
"name": "Mystery"
},
{
"id": 10749,
"name": "Romance"
},
{
"id": 878,
"name": "Science Fiction"
},
{
"id": 10770,
"name": "TV Movie"
},
{
"id": 53,
"name": "Thriller"
},
{
"id": 10752,
"name": "War"
},
{
"id": 37,
"name": "Western"
}
]

export default function MovieCard(props) {
  return (
    <div className=" max-w-xs mb-8">
      <div className="text-center">
        <div className="flex flex-col p-2 items-center justify-center">
          <div className='static hover:scale-105 transition duration-300 ease-in-out '>
            <div className=" relative top-3 mx-auto bg-yellow-500 h-6 w-12 md:h-[26px] md:w-13 rounded-md pl-1 pr-1 font-bold">{props.data.vote_average}</div>
            <a href={/movies/ + props.data.id}><img className="rounded-sm rounded-t-sm border-b-4 border-b-slate-700 shadow-lg shadow-slate-800 hover:shadow-xl hover:shadow-black" src={"https://www.themoviedb.org/t/p/w300_and_h450_bestv2" + props.data.poster_path} /> </a>
          </div>
        </div>
        <div className=" text-left pl-2 text-slate-200">
          <a href={/movies/ + props.data.id}> <h1 className='bg-gradient-to-r from-slate-500 via-slate-700 to-transparent bg-[length:100%_2px] bg-no-repeat bg-bottom font-semibold pb-[6px]'> {props.data.title} </h1> </a>
        </div>
        <div className=" text-left pl-2 text-slate-300 text-sm">
    <p>
                {props.data?.genre_ids?.slice(0, 2).map((item,index) =>
                {
                  let obj = genres.find(o => o.id == item);
                  return `${obj.name}${index < (props.data?.genre_ids?.slice(0, 2).length)-1 ? ", " : ""}`
                }
              )}
    </p>

        </div>
      </div>
    </div>
  )
}
