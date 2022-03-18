import React from 'react'
import RatingStar from './RatingStar';

export default function SearchCard(props) {
    const runCallback = (cb) => {
        return cb();
      };
    let division;
  return (
    <div class="flex bg-slate-400 justify-center">
        <div class="flex-row w-5/6 pt-6 md:w-5/6">
            {props.data.data.map(data =>
            <div class="flex flex-col md:flex-row gap-2 mb-6 p-4 rounded-xl text-black ">
                <img class="rounded-lg w-40 h-60" src={"https://www.themoviedb.org/t/p/w300_and_h450_bestv2" + data.poster_path} alt={data.title} /> 
                <div class="p-3 ml-6 md:p-1 w-1/2">
                    <div className='font-medium mb-3 text-center lg:text-left border-b-2 pb-[4px] border-slate-400 md:border-slate-300'>
                        <a className='text-2xl' href={"/movies/" + data.id + data.title}> {data.title} </a>
                    </div>

                    <div className='flex items-center gap-4 mt-1'>
                    {data.vote_average}
                    <div class="">
                            <RatingStar data={data.vote_average}/>
                    </div>
                    </div>
                    <div class="flex text-center pt-3 justify-start">

                        {/* <div class="bg-gray-900 rounded-xl p-2 ml-4">
                            <p class="pb-2" >Oy Sayısı</p>
                            <p> {data.vote_count} </p>
                        </div>
                        <div class="bg-gray-900 rounded-xl p-2 ml-4">
                            <p class="pb-2">Vizyon Tarihi</p>
                            <p> {data.release_date} </p>
                        </div> */}
                        {/* <div class="bg-gray-900 rounded-xl p-2 ml-4">
                            <p class="pb-2">Tür</p>
                            <p>
                                {data.genres.map(data =>
                                    data.name 
                                )}
                            </p>
                        </div> */}
                    </div>
                    <p class="text-justify">{data.shortOverview}</p>
                </div>
            </div>
            )}
        </div>
    </div>
  )}