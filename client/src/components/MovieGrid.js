import React, {useState, useEffect} from 'react'
import '../../src/dist/css/output.css'
import MovieCard from './MovieCard';

export default function MovieGrid(props) {

  return (
    <div className=" min-h-screen flex pt-2">
      <div className="justify-center mx-auto p-2 w-10/12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {props.data.map(props =>
        <MovieCard  data={props} />
        )}
        
          </div>
      </div>
    </div>
)}
