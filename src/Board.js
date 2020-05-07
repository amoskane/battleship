import React, { useState } from 'react';
import Row from './Row';

const Board = () => {
  //const status = `Next player: ${isXNext ? "X" : "O"}`;
  //const winner = calculateWinner(squares);

  // if (winner) {
  //   status = 'Winner: ' + winner;
  // } else {
  //   status = 'Next player: ' + (isXNext ? 'X' : 'O');
  // }
  const enemyArr = [
    30,
    40,
    50,
    35,
    36,
    37,
    38,
    39,
    98,
    99,
    78,
    79,
    62,
    72,
    82,
    92
  ];
  const [squares, setSquares] = useState(Array(100).fill('O'));
  //const [isXNext, setisXNext] = useState(true);
  const [status, setStatus] = useState('Play!');
  const [enemySquares, setEnemySquares] = useState(enemyArr);

  const rowArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div>
      <div className='status'>{status}</div>
      <div className='board-row'>
        <Row
          index={''}
          key={0}
          squares={squares}
          setSquares={setSquares}
          enemySquares={enemySquares}
          setStatus={setStatus}
        />
      </div>
      {rowArray.map(rowNumber => {
        return (
          <div className='board-row'>
            <Row
              index={rowNumber}
              key={rowNumber}
              squares={squares}
              setSquares={setSquares}
              enemySquares={enemySquares}
              setStatus={setStatus}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Board;
