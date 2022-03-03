import SearchInput from 'react-search-input'
import './search_bar.css';
import {ReactComponent as SearchIcon} from  '../../images/search.svg';


export const SearchBar = () => {
  return (
    <div className='container'>
        <input type="text" placeholder='Search Films' ></input>
        <button>
        <SearchIcon className='icon' color='#FFFFFF'/>
        </button>

    </div>
  );
}