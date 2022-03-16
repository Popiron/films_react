import './App.css';

import {Home} from './pages/home/home'
import { Navigate, Route, Router, Routes } from 'react-router';
import React from 'react';
import { Profile } from './pages/profile/profile';
import { Details } from './pages/details/details';
import { Login } from './pages/login/login';

class App extends React.Component {
  render() {
    return (
        <Routes>
          <Route path="/movies" element={<Home/>}/>
          <Route path="/movies/:id" element={<Details/>}/>
          <Route path="/" element={<Navigate to="/movies"/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
    )
  }
}

export default App;
