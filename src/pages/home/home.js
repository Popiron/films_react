import { MoviesGrid } from '../components/movies_grid/movies_grid'
import { Navbar } from '../components/navbar/navbar';
import { SearchBar } from '../components/search_bar/search_bar';
import './home.css';

export const Home = () => {
    return (
      <>
        <Navbar isInsideProfile={false}/>
        <div id='main_title'>
          Movies
        </div>
        <SearchBar/>
        <MoviesGrid/>
      </>
    );
  }