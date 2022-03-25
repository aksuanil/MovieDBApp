import express from 'express';
import axios from 'axios';

let pageId = 1;
const topratedRouter = express.Router();

topratedRouter.get('/', (request, response) => {
    pageId = 1 ;
    let detailResults = [];
        async function getMovieDetail() {
            try {
                let apiData = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=946d32131d3e345d057d1d753c5c8a06&language=tr-TR&region=TR&page=${pageId}`);
                detailResults = apiData.data;
                response.json({data: detailResults});
            } catch (error) {
                response.status(400);
                res.send("Server Error")
            }
        };
        getMovieDetail(); 
    });

topratedRouter.get('/:pageId', (request, response) => {
    pageId = request.params.pageId;
    let detailResults = [];
        async function getMovieDetail() {
            try {
                let apiData = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=946d32131d3e345d057d1d753c5c8a06&language=tr-TR&region=TR&page=${pageId}`);
                detailResults = apiData.data;
                response.json({data: detailResults});
            } catch (error) {
                response.status(400);
                res.send("Server Error")
            }
        };
        getMovieDetail(); 
    });

export default topratedRouter;