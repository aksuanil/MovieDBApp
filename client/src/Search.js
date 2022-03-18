import React, { useEffect } from "react";
import Header from "./components/Header";
import { useQuery } from "react-query";
import SearchCard from "./components/SearchCard";
import Loader from "./components/Loader";
import { useSearchParams } from "react-router-dom";

function Search() {
    const [searchParams, setSearchParams] = useSearchParams();
    let searchString = searchParams.get("search")    
    const fetchPopular = async ()=> {
        const response = await fetch("search?search=" + searchString);
        return response.json();
      }
    const {data, status} = useQuery('search', fetchPopular);
      console.log(data);
    return (
        <>
            <Header/>
            {status === 'loading' && (
              <Loader/>
            )}
            {status === 'error' && (
              <div>Error fetching data</div>
            )}
            {status === 'success' && (
            <SearchCard data={data}/>
            )}
        </>
    )
}
export default Search;