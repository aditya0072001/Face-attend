import React from 'react';
import './App.css';
import './components/navbar/navbar'
import NavBar from './components/navbar/navbar.js';
import SideBar from './components/sidedrawer/sidedrawer.js';
import Visible from './components/visible/visible.js';
function App() {
  return (
    <div className="App">
    <NavBar></NavBar>
    <SideBar></SideBar>
    <Visible></Visible>
    </div>
  );
}

export default App;
