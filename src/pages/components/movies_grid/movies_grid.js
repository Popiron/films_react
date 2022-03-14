import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { MoviesApi } from '../../../asyncActions/movies';
import { MoviePoster } from '../movie_poster/moviePoster';

import './movies_grid.css';

export const MoviesGrid = () => {
    const dispatch = useDispatch();

    const movies = useSelector(state=>state.movies);
    const [fetching, setFetching] = useState(true);


    const fetchMoreMovies = () => {
        if (fetching) {
            setFetching(false);
            MoviesApi.loadMore(dispatch).then(
                ()=> {
                    setFetching(true);
                }
            ); 
        }
    }


    useEffect(() => {
        MoviesApi.fetchPopularMovies(dispatch);
        
    }, []);


    const scrollHandler = (e) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100 && fetching) {
            setFetching(false);
            fetchMoreMovies();
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
    <div className='movies_grid'>   
    {movies?.map((element, index) => (
          <MoviePoster rating={element.vote_average} title={element.original_title} imgUrl={"https://image.tmdb.org/t/p/w500/"+element.poster_path}/>
    ))}
    </div>

    </>
    );
}