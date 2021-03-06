import React from "react";
import MovieGrid from "../components/MovieGrid";
import Loader from "../components/Loader";
import { serverPath } from '../App'
import { useQuery } from "react-query";

function TopRated() {
    const fetchTopRated = async () => {
        const response = await fetch(serverPath + "toprated");
        return response.json();
    }
    const { data, status } = useQuery('popular', fetchTopRated);
    return (
        <div className="bg-gradient-to-bl from-gray-700 via-gray-900 to-black">
            <div className="bg-gradient-to-bl from-gray-700 via-gray-900 to-black">
            {status === 'loading' && (
                <Loader />
            )}
            {status === 'error' && (
                <div>Error fetching data</div>
            )}
            {status === 'success' && (
                <MovieGrid data={data.data.results} />
            )}
            </div>
        </div>
    )
}

export default TopRated;