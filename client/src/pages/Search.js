import React from "react";
import { useQuery } from "react-query";
import SearchCard from "../components/SearchCard";
import Loader from "../components/Loader";
import { useSearchParams } from "react-router-dom";
import { serverPath } from "../App";

function Search() {
    const [searchParams, setSearchParams] = useSearchParams();
    let searchString = searchParams.get("search")    
    const fetchPopular = async ()=> {
        const response = await fetch(`${serverPath}search?search=${searchString}`);
        return response.json();
      }
    const {data, status} = useQuery('search', fetchPopular);
      console.log(data);
    return (
        <>
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