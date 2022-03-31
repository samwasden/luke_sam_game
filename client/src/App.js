import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Game from './components/game/Game';
import './App.css';

function App() {

  return (
      <Router>
        <Routes>
          <Route path={'/'} element={ <Game /> } />
        </Routes>
      </Router>
  );
}

export default App;
