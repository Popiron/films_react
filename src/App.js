import './App.css';

import {Navbar} from './components/navbar/navbar.js';
import {MoviePoster} from './components/movie_poster/moviePoster.js';
import Grid from '@mui/material/Grid';
import { SearchBar } from './components/search_bar/search_bar.js';
import { fetchPopularMovies } from './asyncActions/movies';
import { MoviesGrid } from './components/movies_grid/movies_grid';
import { Home } from './components/home/home';
import { Navigate, Route, Router, Routes } from 'react-router';
import React from 'react';
import { Switch } from '@mui/material';
import {Redirect} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
        <Routes>
          <Route path="/movies" element={<Home/>}/>
          <Route path="/" element={<Navigate to="/movies"/>}/>
        </Routes>
    )
  }
}

export default App;
