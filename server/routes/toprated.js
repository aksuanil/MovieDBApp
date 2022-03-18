import express from 'express';
import axios from 'axios';

const topratedRouter = express.Router();
const getMovieDetailApiURI = `https://api.themoviedb.org/3/movie/top_rated?api_key=946d32131d3e345d057d1d753c5c8a06&language=tr-TR&region=TR`

topratedRouter.get('/', (request, response) => {
    let movieId = request.params.movieId;
    let detailResults = [];
        async function getMovieDetail() {
            try {
                let apiData = await axios.get(getMovieDetailApiURI);
                detailResults = apiData.data;
                response.render('../server/views/toprated', {data: detailResults});
            } catch (error) {
                response.status(400);
                res.send("Server Error")
            }
        };
        getMovieDetail(); 
    });

export default topratedRouter;