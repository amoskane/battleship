import React from 'react';
import Board from './Board';
import './app.css';

const App = () => {
  return (
    <div className='game'>
      <div className='game-board'>
        <Board />
      </div>
    </div>
  );
};

export default App;
