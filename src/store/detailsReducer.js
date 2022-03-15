const defaultState = {};

const LOAD_MOVIE_DETAILS = "LOAD_MOVIE_DETAILS";

export const detailsReducer = (state = defaultState, action) => {
    switch (action.type){
      case LOAD_MOVIE_DETAILS:
        return action.details;
      default:
        return state;
    }
}

export const loadMovieDetailsAction = (details) => ({type:LOAD_MOVIE_DETAILS, details});