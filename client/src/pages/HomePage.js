import React, { useState} from "react";
import { useQuery } from "react-query"
import MovieGrid from "../components/MovieGrid";
import CategoryBar from "../components/CategoryBar";
import Loader from "../components/Loader";
import { serverPath } from "../App";

export default function HomePage() {
  const fetchPopular = async ()=> {
    const response = await fetch(serverPath+"main");
    return response.json();
  }
  const {data, status} = useQuery('popular', fetchPopular);

  const fetchGenre = async ()=> {
    const response = await fetch(`${serverPath}movies/getMoviesByGenre/${id}`);
    return response.json();
  }
  const [id, setData] = useState(0);
  const [page, setPage] = useState('popular')

  const teamsQuery = useQuery(["genre", id], fetchGenre)

  const getGenreId = (genreId) => {
    setData(genreId);
    setPage("others")
    // fetchGenre(id);
  }
    return (
      <>
          <CategoryBar getGenreId={getGenreId}/>
          <div className="bg-gradient-to-bl from-gray-700 via-gray-900 to-black">
            {status === 'loading' && page === 'popular' && (
              <Loader/>
            )}
            {status === 'error' && page === 'popular'  && (
              <div>Error fetching data</div>
            )}
            {status === 'success' && page === 'popular' && (
              <MovieGrid data={data.data}/>
            )}

            {teamsQuery.status === 'loading' && page === 'others' && (
              <Loader/>
            )}
            {teamsQuery.status === 'error' && page === 'others' && (
              <div>Error fetching data</div>
            )}
            {teamsQuery.status === 'success' && page === 'others' && (
              <MovieGrid data={teamsQuery.data.data}/>
            )}
    </div>
    </>
    )
}
