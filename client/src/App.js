import React from 'react';
import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import ButtonAdd from './components/ButtonAdd';

const App = () => (
  <div>
    <Navbar />
    <div className="container">
      <Main />
    </div>
    <div className="fixed-action-btn">
      <ButtonAdd />
    </div>
  </div>
)

export default App;
