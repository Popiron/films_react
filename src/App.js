import './App.css';

import {Home} from './pages/home/home'
import { Navigate, Route, Router, Routes } from 'react-router';
import React from 'react';
import { Profile } from './pages/profile/profile';

class App extends React.Component {
  render() {
    return (
        <Routes>
          <Route path="/movies" element={<Home/>}/>
          <Route path="/" element={<Navigate to="/movies"/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
    )
  }
}

export default App;
