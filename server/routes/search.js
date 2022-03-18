import express from 'express';
import axios from 'axios';

const searchRouter = express.Router();
const apiKey = "946d32131d3e345d057d1d753c5c8a06";
const searchMovieApiURI = "https://api.themoviedb.org/3/search/movie?api_key=946d32131d3e345d057d1d753c5c8a06&language=en-US&query=";
const getMovieDetailApiURI = "https://api.themoviedb.org/3/movie/614917?api_key=946d32131d3e345d057d1d753c5c8a06&language=en-US"

let searchResults = [];
let apiDetailData = [];

searchRouter.get('/', getMovieSearch,(req, res) => {
    res.json({data : searchResults})
    });

async function getMovieSearch(req, res, next) {
    searchResults = [];
    let searchString = req.query.search;
    try {
        let apiData = await axios.get(searchMovieApiURI + searchString);
        let nodes = apiData.data.results;
        let shortOverview;
        // for (let i = 0; i < nodes.length; i++) 
        // {
        //     let movieId = nodes[i].id;
        //     await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=946d32131d3e345d057d1d753c5c8a06&language=tr-TR`).then(response => {
        //         apiDetailData = response.data;
        nodes.map( item => {
            let shortSentence = item.overview.split(".")[0]
            item.shortOverview = shortSentence;
            searchResults.push(item);
        })
        next();


        }
        catch (error) {
        res.status(400);
        res.send("Server Error")
        next();
    }
};

        
export default searchRouter;