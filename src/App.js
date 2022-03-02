import './App.css';
import React from 'react';
import {Navbar} from './components/navbar/navbar.js';
import {MoviePoster} from './components/movie_poster/moviePoster.js';
import Grid from '@mui/material/Grid';
import { SearchBar } from './components/search_bar/search_bar';
const welcome = {
  greeting: "Hey",
  title: 'React',
}

const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YTAyZjM1ODk1ODlhZDhlNDQ4ODg4YTA2OWM0NjY0OSIsInN1YiI6IjVmZDVlMjk0NDE0MjkxMDAzZjQ1ZjYxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JPC-r71EYBFa-YmxB-VeZzfAowne0A_SQvYrBgCs07E";



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

  return (
    <>
      <Navbar/>
      <SearchBar/>
      <div className='movies_grid'>
      <Grid className="movies_grid" container direction="row" justifyContent="center" spacing={{ xs: 2, md:  65}} columns={{ xs: 4, sm: 4, md: 20 }}>
      {data.map((element, index) => (
        <Grid  item container justifyContent="center" alignItems="flex-start" padding="0px 200px" sm={4} md={4} key={index}>
            <MoviePoster rating={element.rating} title={element.title} imgUrl={element.imgUrl}/>
        </Grid>
      ))}
      </Grid> 
      </div>
      
    </>
  );
}

export default App;
