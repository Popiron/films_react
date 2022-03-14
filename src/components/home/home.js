import { MoviesGrid } from '../movies_grid/movies_grid';
import { Navbar } from '../navbar/navbar';
import { SearchBar } from '../search_bar/search_bar';
import './home.css';

export const Home = () => {
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