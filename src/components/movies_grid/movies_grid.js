import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { fetchPopularMovies, MoviesApi } from '../../asyncActions/movies';
import { MoviePoster } from '../movie_poster/moviePoster';
import ProgressButton from 'react-progress-button'

import './movies_grid.css';
import { loadPopularMoviesAction } from '../../store/moviesReducer';

export const MoviesGrid = () => {
    const dispatch = useDispatch();

    const movies = useSelector(state=>state.movies);
    const [fetching, setFetching] = useState(true);
    const [init,setInit] = useState(true);

    const fetchPopularMovies = () => {
        if (fetching) {
            setFetching(false);
            MoviesApi.fetchPopularMovies(dispatch).then(
                ()=> {
                    setFetching(true);
                }
            ); 
        }
    }


    useEffect(() => {
        if (init) {
            fetchPopularMovies();
            setInit(false);
        }
    }, [init]);


    const scrollHandler = (e) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100 && fetching) {
            setFetching(false);
            fetchPopularMovies();
        }
    }

    useEffect(()=>{
        document.addEventListener('scroll',scrollHandler)
        return function() {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [fetching])

    return (
    <>
    <div className='search_count'>
     items
    </div>,
    <div className='movies_grid'>   
    {movies?.map((element, index) => (
          <MoviePoster rating={element.vote_average} title={element.original_title} imgUrl={"https://image.tmdb.org/t/p/w500/"+element.poster_path}/>
    ))}
    </div>

    </>
    );
}