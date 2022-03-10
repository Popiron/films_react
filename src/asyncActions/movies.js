import { loadPopularMoviesAction } from "../store/moviesReducer";

const API_KEY = "7a02f3589589ad8e448888a069c46649";
const URL = "https://api.themoviedb.org/3/";


export const fetchPopularMovies = async (dispatch) => {
    var movies = await fetch(URL+"movie/popular?api_key="+API_KEY);
    if (movies.status == 200) {
        var json = await movies.json();
        dispatch(loadPopularMoviesAction(json)); 
    } else {
    }
}