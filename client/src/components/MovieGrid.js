import React, {useState, useEffect} from 'react'
import '../../src/dist/css/output.css'
import MovieCard from './MovieCard';

export default function MovieGrid(props) {

  return (
    <div className=" min-h-screen flex mt-4 ">
      <div className="justify-center mx-auto p-2 w-10/12">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {props.data.map(props =>
        <MovieCard  data={props} />
        )}
        
          </div>
      </div>
    </div>
)}
