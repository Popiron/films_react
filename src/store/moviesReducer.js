const defaultState = {
    page: 0,
    movies: []
}

const LOAD_POPULAR_MOVIES = "LOAD_POPULAR_MOVIES";

export const moviesReducer = (state = defaultState, action) => {
    switch (action.type){
      case LOAD_POPULAR_MOVIES:
        return action;
      default:
        return state;
    }
}

export const loadPopularMoviesAction = (movies) => ({type:LOAD_POPULAR_MOVIES, movies});