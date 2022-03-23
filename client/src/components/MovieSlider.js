import React, {useState, useEffect} from 'react'
import '../../src/dist/css/output.css'
import Carousel from 'react-elastic-carousel';
import { serverPath } from '../App';

export default function MovieSlider(props) {
  const [arrays, setArray] = useState([]);
  useEffect( async ()=> {
    const response = await fetch(serverPath +"/movies/" + props.movieId);
    const data = await response.json();
    setArray(data.dataRecommended.results);
},[])

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 500, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 6 },
    ];

 return (
    <div>
        <Carousel breakPoints={breakPoints} pagination={false} enableAutoPlay={true}>
        {arrays.map(item =>
                  <div className="justify-start">
                      <a href={/movies/ + item.id }><img className=" ml-auto mr-auto rounded-xl sm:w-36 sm:mt-3 sm:mb-3" src={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2"+ item.poster_path}/></a> 
                  </div> )}
        </Carousel>

    {/* <div className="bg-slate-800 rounded-3xl w-4/6 m-auto sm:w-full flex ">
          <ul id="lightSlider">
              {arrays.map(item =>
                  <li className="justify-start">
                      <img className=" ml-auto mr-auto rounded-xl sm:w-36 sm:mt-3 sm:mb-3" src={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2"+ item.poster_path}/> 
                  </li> )}
          </ul>
        </div> */}

    </div>
        )
    }
