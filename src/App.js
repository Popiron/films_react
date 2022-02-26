import './App.css';
import React from 'react';
import {Navbar} from './components/navbar/navbar.js';
import {MoviePoster} from './components/movie_poster/moviePoster.js';

const welcome = {
  greeting: "Hey",
  title: 'React',
}



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

const App = () => {

  return (
    <>
      <Navbar/>
      <MoviePoster/>
    </>
  );
}

export default App;
