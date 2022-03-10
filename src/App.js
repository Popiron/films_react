import './App.css';
import React, { useEffect } from 'react';
import {Navbar} from './components/navbar/navbar.js';
import {MoviePoster} from './components/movie_poster/moviePoster.js';
import Grid from '@mui/material/Grid';
import { SearchBar } from './components/search_bar/search_bar.js';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularMovies } from './asyncActions/movies';




function getTitle(title) {
  return title;
}

class Developer {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getName() {
    return this.firstName + ' ' + this.lastName;
  }
}



const List  = props => 
  
  (<div>
    {props.list.map((item) => (<div id={item.objectID}>
          <span>
            <a href={item.url}>{item.title}</a>
          </span>
          <span> {item.author} </span>
          <span> {item.num_comments} </span>
          <span> {item.points} </span>
        </div>
    ))}
  </div>);

const Search = ({onSearch,search}) => {

  return (<>
    <label htmlFor="search">Search: </label>
    <input type="text" id="search" onChange={onSearch} value={search}/>
  </>)
}

const data = [
  {
    'rating':6.8,
    'title':'Black Widow',
    'imgUrl':'https://i.pinimg.com/736x/22/41/9a/22419a1fbcfd03100d9dc6b28d8e1a3a.jpg',
  },
  {
    'rating':6.8,
    'title':'Black Widow',
    'imgUrl':'https://i.pinimg.com/736x/22/41/9a/22419a1fbcfd03100d9dc6b28d8e1a3a.jpg',
  },
  {
    'rating':6.8,
    'title':'Black Widow',
    'imgUrl':'https://i.pinimg.com/736x/22/41/9a/22419a1fbcfd03100d9dc6b28d8e1a3a.jpg',
  },
  {
    'rating':6.8,
    'title':'Black Widow',
    'imgUrl':'https://i.pinimg.com/736x/22/41/9a/22419a1fbcfd03100d9dc6b28d8e1a3a.jpg',
  },
  {
    'rating':6.8,
    'title':'Black Widow',
    'imgUrl':'https://i.pinimg.com/736x/22/41/9a/22419a1fbcfd03100d9dc6b28d8e1a3a.jpg',
  },
  {
    'rating':6.8,
    'title':'Black Widow',
    'imgUrl':'https://i.pinimg.com/736x/22/41/9a/22419a1fbcfd03100d9dc6b28d8e1a3a.jpg',
  },
  {
    'rating':6.8,
    'title':'Black Widow',
    'imgUrl':'https://i.pinimg.com/736x/22/41/9a/22419a1fbcfd03100d9dc6b28d8e1a3a.jpg',
  },
  {
    'rating':6.8,
    'title':'Black Widow',
    'imgUrl':'https://i.pinimg.com/736x/22/41/9a/22419a1fbcfd03100d9dc6b28d8e1a3a.jpg',
  },
  {
    'rating':6.8,
    'title':'Black Widow',
    'imgUrl':'https://i.pinimg.com/736x/22/41/9a/22419a1fbcfd03100d9dc6b28d8e1a3a.jpg',
  },
  {
    'rating':6.8,
    'title':'Black Widow',
    'imgUrl':'https://i.pinimg.com/736x/22/41/9a/22419a1fbcfd03100d9dc6b28d8e1a3a.jpg',
  },
]



const App = () => {
  const dispatch = useDispatch();
  const movies = useSelector(state=>state.movies.movies);
  useEffect(() => {
    fetchPopularMovies(dispatch);
  }, []);

  return (
    <>
      <Navbar/>
      <div className='main_title'>
        Movies
      </div>
      <SearchBar/>
      <div className='search_count'>
        {movies.page} items
      </div>
      <div className='movies_grid'>
      {movies.results.map((element, index) => (
            <MoviePoster rating={element.vote_average} title={element.original_title} imgUrl={"https://image.tmdb.org/t/p/w500/"+element.poster_path}/>
      ))}
      </div>
      
    </>
  );
}

export default App;
