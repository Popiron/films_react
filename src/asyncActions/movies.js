import { loadMovieDetailsAction } from "../store/detailsReducer";
import { loadMoviesByTextAction, loadNewMoviesByTextAction, loadNewPopularMoviesAction, loadPopularMoviesAction } from "../store/moviesReducer";

export class MoviesApi {
    static #API_KEY = "7a02f3589589ad8e448888a069c46649";
    static #URL = "https://api.themoviedb.org/3/";

    static #currentPage = 1;
    static #totalPages = 1;
    static #searchText = "";

    static fetchPopularMovies = async (dispatch) => {
        if (this.#currentPage <= this.#totalPages) {
            var movies = await fetch(this.#URL+"movie/popular?api_key="+this.#API_KEY+"&page="+this.#currentPage);
            if (movies.status == 200) {
                var json = await movies.json();
                this.#currentPage++;
                this.#totalPages = json.total_pages;
                if (this.#currentPage==2)
                {
                    dispatch(loadNewPopularMoviesAction(json.results));
                }else{
                    dispatch(loadPopularMoviesAction(json.results));

                }
            }
        }
    }

    static fetchMoviesByText = async (dispatch,text) => {
        var isDiff = this.#searchText!=text;
        if (isDiff)
        {
            this.#totalPages=1;
            this.#currentPage=1;
            this.#searchText = text;
        }

        if (this.#searchText==""){
            await this.fetchPopularMovies(dispatch);
            return;
        }
        
        if (this.#currentPage <= this.#totalPages) {
            var movies = await fetch(this.#URL+"search/movie?api_key="+this.#API_KEY+"&query="+text+"&page="+this.#currentPage);
            if (movies.status == 200) {
                var json = await movies.json();
                this.#currentPage++;
                this.#totalPages = json.total_pages;
                if (isDiff) {
                    dispatch(loadNewMoviesByTextAction(json.results));
                } else {
                    dispatch(loadMoviesByTextAction(json.results));
                }
            }
        }
    }

    static loadMore = async (dispatch) => {
        if (this.#searchText!="") {
            await this.fetchMoviesByText(dispatch, this.#searchText);
        } else {
            await this.fetchPopularMovies(dispatch);
        }
    }

    static fetchMovieDetails = async (dispatch, movieId) => {
        var details = await fetch(`${this.#URL}movie/${movieId}?api_key=${this.#API_KEY}`);
        if (details.status == 200) {
            var json = await details.json();
            dispatch(loadMovieDetailsAction(json));
        }
    }
}


