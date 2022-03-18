import express from 'express';
import axios from 'axios';
import moviesRouter from './routes/movies.js';
import searchRouter from './routes/search.js';
import topratedRouter from './routes/toprated.js';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

const app = express();

const popularMoviesApiKey = "https://api.themoviedb.org/3/movie/popular?api_key=946d32131d3e345d057d1d753c5c8a06";
const PORT = process.env.PORT || 5000;

app.use('/dist', express.static('dist'));


const __dirname = dirname(fileURLToPath(import.meta.url));

app.set('views', __dirname);
app.set('public', __dirname);

app.set('view engine', 'ejs');

app.use('*/css',express.static('public/css'));
// app.use('*/css',express.static('public/css'));

app.use('/movies', moviesRouter);
app.use('/search', searchRouter);
app.use('/toprated', topratedRouter);



app.get('/main', (request, response) => {
let popularMovies = [];
try {
    async function getMovies() {
        let apiData = await axios.get(popularMoviesApiKey);
        return apiData
    };
    getMovies().then(res => {
        popularMovies = res.data.results;
        response.json({data: popularMovies});
    });
    
} catch (error) { 
    response.status(400).json({error: error.message})
}

});


app.get('/movie/:movieNumber?', (req,res) => {
    movieNumber = req.params.movieNumber;
    async function getMovies(movieNumber) {
        await axios.get(popularMoviesApiKey).then(response => {
            console.log(`statusCode: ${response.status}`)
            //console.log(res)
            console.log(response.data.results[movieNumber].original_title);
            popularMovies = response.data.results;
        })
        .catch(error => {
            res.send("Server Error")
        });
    
    res.send("This is the movie " + popularMovies[movieNumber].original_title);
    };
    getMovies(movieNumber);
});


app.listen(PORT || 3001, () => console.log(`App available on the port ${process.env.PORT}`));
