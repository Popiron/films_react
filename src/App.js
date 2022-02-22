import logo from './logo.svg';
import './App.css';
import React from 'react';

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
  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];

  const [searchTerm, setSearchTerm] = React.useState(localStorage.getItem("search") || 'React');

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  }

  React.useEffect(()=>{
    localStorage.setItem("search",searchTerm);
  },[searchTerm])

  const searchedStories = stories.filter((story)=>story.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div>
      
      <h1>{welcome.greeting}, {getTitle("Dima")}!</h1>
      <Search search={searchTerm} onSearch={handleSearch}/>
      <hr />

      <List list={searchedStories} />

    </div>
  );
}

export default App;
