import { loadPopularMoviesAction } from "../store/moviesReducer";

export class MoviesApi {
    static #API_KEY = "7a02f3589589ad8e448888a069c46649";
    static #URL = "https://api.themoviedb.org/3/";

    static #currentPage = 1;
    static #totalPages = 1;

    static fetchPopularMovies = async (dispatch) => {
        if (this.#currentPage <= this.#totalPages) {
            var movies = await fetch(this.#URL+"movie/popular?api_key="+this.#API_KEY+"&page="+this.#currentPage);
            if (movies.status == 200) {
                var json = await movies.json();
                this.#currentPage++;
                this.#totalPages = json.total_pages;
                dispatch(loadPopularMoviesAction(json.results));
            }
        }
        
    }
}


