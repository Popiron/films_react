const defaultState = [];

const LOAD_POPULAR_MOVIES = "LOAD_POPULAR_MOVIES";

export const moviesReducer = (state = defaultState, action) => {
    switch (action.type){
      case LOAD_POPULAR_MOVIES:
        return [...state, ...action.movies];
      default:
        return state;
    }
}

export const loadPopularMoviesAction = (movies) => ({type:LOAD_POPULAR_MOVIES, movies});