import React from 'react';
import Board from './Containers/Board';
import './App.css';

const App = () => {
  return (
    <div className='game'>
      <h2 className='title'>Battleship</h2>
      <Board />
    </div>
  );
};

export default App;
