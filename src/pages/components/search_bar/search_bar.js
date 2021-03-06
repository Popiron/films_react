import './search_bar.css';
import {ReactComponent as SearchIcon} from  '../../../images/search.svg';
import { useDispatch } from 'react-redux';
import { MoviesApi } from '../../../asyncActions/movies';
import { useState } from 'react';


export const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  return (
    <div id='container'>
        <input id='search_input' type="text" placeholder='Search Films' value={searchText} onChange={(event)=>{setSearchText(event.target.value)}} ></input>
        <button id='search_button' type='button' onClick={()=>{MoviesApi.fetchMoviesByText(dispatch,searchText);}} disabled={false}>
        <SearchIcon id='icon' color='#FFFFFF'/>
        </button>

    </div>
  );
}