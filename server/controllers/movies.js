import axios from 'axios';

const getMovieDetailApiURI = `https://api.themoviedb.org/3/movie/`
let detailResults = [];
let listResults = [];
let recommendedResults = [];
let crewResults = [];
let creditsResults = [];
let moviesByGenreResults = [];

async function getMovieDetail(req,res) {
    let movieId = req.params.movieId;
    detailResults = [];
    try {
        let apiData = await axios.get(getMovieDetailApiURI + `${movieId}?api_key=946d32131d3e345d057d1d753c5c8a06&language=tr-TR`);
        detailResults = apiData.data;
    } catch (error) {
        res.status(500);
        res.send("Movie Api Server Error")
    }
};

async function getMovieLists(req,res) {
    let movieId = req.params.movieId;
    listResults = [];
    try {
        let apiData = await axios.get(getMovieDetailApiURI + `${movieId}/lists?api_key=946d32131d3e345d057d1d753c5c8a06&language=tr-TR`);
        listResults = apiData.data;
    } catch (error) {
        res.status(500);
        res.send("Movie Api Server Error")
    }
};

async function getRecommendedMovies(req, res) {
    let movieId = req.params.movieId;
    recommendedResults = [];
        try {
            recommendedResults = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=946d32131d3e345d057d1d753c5c8a06`);
        } catch (error) {
            res.status(500);
            res.send("Movie Api Server Error")
        }
};

async function getMoviesByGenre(req, res) {
    let genreId = req.params.genreId;
    moviesByGenreResults = [];
        try {
            moviesByGenreResults = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=946d32131d3e345d057d1d753c5c8a06&with_genres=${genreId}`);
        } catch (error) {
            res.status(500);
            res.send("Movie Api Server Error")
        }
};

async function getCredits(req, res) {
    let movieId = req.params.movieId;
    crewResults = {             
            director: [],
            writer: [],
            screenplay: [],
            };            
    creditsResults = [];
        try {
            creditsResults = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=946d32131d3e345d057d1d753c5c8a06&language=en-US`);
            creditsResults.data.crew.forEach(element => {
            if (element.department == 'Directing' && element.job == 'Director')
                crewResults.director.push({name: element.name, url:element.profile_path})
            if (element.department == 'Writing')
                crewResults.writer.push({name: element.name, url:element.profile_path})
            if (element.job == 'Screenplay'){
                crewResults.screenplay.push({name: element.name, url:element.profile_path})
            }
        });
        // Get unique objects
        crewResults.writer = [...new Map(crewResults.writer.map((item) => [item["name"], item])).values()];
        crewResults.screenplay = [...new Map(crewResults.screenplay.map((item) => [item["name"], item])).values()];
        } catch (error) {
            res.status(500);
            res.send("Movie Api Server Error")
        }
};

async function getAll(req, res) {
        try {
            await getMovieDetail(req,res);
            await getMovieLists(req,res);
            await getRecommendedMovies(req,res);
            await getCredits(req, res);
            res.json({dataDetail: detailResults, dataRecommended: recommendedResults.data, dataLists: listResults, dataCredits: creditsResults.data, dataCrew: crewResults })
        } catch (error) {
            res.status(500);
            res.send("Server Error")
        }
};

async function responseMovieDetail(req,res) {
    await getMovieDetail(req,res);
    try {
        res.json({data: detailResults})
    } catch (error) {
        res.status(500);
        res.send("Server Error")
    }
}

async function responseRecommendedMovies(req,res) {
    await getRecommendedMovies(req,res);
    try {
        res.json({data: recommendedResults.data})
    } catch (error) {
        res.status(500);
        res.send("Server Error")
    }
}

async function responseMovieLists(req,res) {
    await getMovieLists(req,res);
    try {
        res.json({data: listResults})
    } catch (error) {
        res.status(500);
        res.send("Server Error")
    }
}

async function responseCredits(req,res) {
    await getCredits(req,res);
    try {
        res.json({credits: creditsResults.data, crew: crewResults});
    } catch (error) {
        res.status(500);
        res.send("Server Error")
    }
}

async function responseMoviesByGenre(req,res) {
    await getMoviesByGenre(req,res);
    try {
        res.json({data: moviesByGenreResults.data.results});
    } catch (error) {
        res.status(500);
        res.send("Server Error")
    }
}


export { getAll };
export { responseMovieLists };
export { responseMovieDetail };
export { responseRecommendedMovies };
export { responseCredits };
export { responseMoviesByGenre };

