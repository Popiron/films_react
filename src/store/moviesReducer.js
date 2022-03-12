const defaultState = [];

const LOAD_POPULAR_MOVIES = "LOAD_POPULAR_MOVIES";
const LOAD_SEARCH_MOVIES = "LOAD_SEARCH_MOVIES";

const LOAD_NEW_SEARCH_MOVIES = "LOAD_NEW_SEARCH_MOVIES";
const LOAD_NEW_POPULAR_MOVIES = "LOAD_NEW_POPULAR_MOVIES";

export const moviesReducer = (state = defaultState, action) => {
    switch (action.type){
      case LOAD_POPULAR_MOVIES:
        return [...state, ...action.movies];
      case LOAD_SEARCH_MOVIES:
        return [...state, ...action.movies];  
      case LOAD_NEW_SEARCH_MOVIES:
        return action.movies;
      case LOAD_NEW_POPULAR_MOVIES:
        return action.movies;      
      default:
        return state;
    }
}

export const loadPopularMoviesAction = (movies) => ({type:LOAD_POPULAR_MOVIES, movies});
export const loadNewPopularMoviesAction = (movies) => ({type:LOAD_NEW_POPULAR_MOVIES, movies});
export const loadMoviesByTextAction = (movies) => ({type:LOAD_SEARCH_MOVIES, movies});
export const loadNewMoviesByTextAction = (movies) => ({type:LOAD_NEW_SEARCH_MOVIES, movies});