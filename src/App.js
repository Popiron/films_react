import './App.css';

import {Navbar} from './components/navbar/navbar.js';
import {MoviePoster} from './components/movie_poster/moviePoster.js';
import Grid from '@mui/material/Grid';
import { SearchBar } from './components/search_bar/search_bar.js';
import { fetchPopularMovies } from './asyncActions/movies';
import { MoviesGrid } from './components/movies_grid/movies_grid';

export const App = () => {
  return (
    <>
      <Navbar/>
      <div className='main_title'>
        Movies
      </div>
      <SearchBar/>
      <MoviesGrid/>
    </>
  );
}

export default App;
