import React, { useState } from 'react';
import Row from '../Components/Row';
import classes from './Board.module.css';

const Board = () => {
  //<TO DO>
  //allow enemyArr to be user entered, not hard coded.
  //const enemyArr = [];
  const [squares, setSquares] = useState(Array(100).fill('O'));
  const [status, setStatus] = useState('Set Your Ships!');
  const [isPlayMode, setIsPlayMode] = useState(false);
  const [enemySquares, setEnemySquares] = useState([]);
  const [enemyShip, setEnemyShip] = useState([]);

  const rowArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const handleSetShip = () => {
    const enemySquaresClone = [...enemySquares];
    const enemyShipClone = [...enemyShip];
    setEnemyShip(enemyShipClone); //[[12,13]]

    enemySquaresClone.push(enemyShip);
    //check if enemySquares is full
    //yes go to play mode
    //no go back to enemyShip
    setEnemySquares(enemySquaresClone);
    setEnemyShip([]);
  };
  const handlesetPlayMode = () => {
    setIsPlayMode(!isPlayMode);
  };
  return (
    <div data-testid='board'>
      <div className={classes.boardRow} data-testid='row' key={0}>
        <Row
          index={''}
          squares={squares}
          setSquares={setSquares}
          enemySquares={enemySquares}
          setEnemySquares={setEnemySquares}
          enemyShip={enemyShip}
          setStatus={setStatus}
          isPlayMode={isPlayMode}
          setIsPlayMode={setIsPlayMode}
        />
      </div>
      {rowArray.map(rowNumber => {
        return (
          <div className={classes.boardRow} data-testid='row' key={rowNumber}>
            <Row
              index={rowNumber}
              squares={squares}
              setSquares={setSquares}
              enemySquares={enemySquares}
              setEnemySquares={setEnemySquares}
              enemyShip={enemyShip}
              setStatus={setStatus}
              isPlayMode={isPlayMode}
              setIsPlayMode={setIsPlayMode}
            />
          </div>
        );
      })}
      <div className={classes.status}>{status}</div>
      <button onClick={handleSetShip}>Set Ship</button>
      <button onClick={handlesetPlayMode}>Switch to Play Mode!</button>
    </div>
  );
};

export default Board;
