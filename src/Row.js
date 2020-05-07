import React, { useState, useEffect } from 'react';
import Square from './Square';

// function calculateWinner(squares) {
//   //squares = [x,x,x,x,x,x,x,x,x]
//   const lines = [[0, 1, 2]];
//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i]; //a=0, b=1, c=2
//     //does squares have a value at a?
//     //is the value at a and b the same?
//     //is the value at a and c the same?
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       //return true?
//       return squares[a];
//     }
//   }
//   return null;
// }

const Row = props => {
  const colArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const row = props.index.toString();
  const { enemySquares, squares, setSquares, setStatus } = props;

  const changeBoard = square => {
    const nextSquares = [...squares];

    const integerSquare = parseInt(square, 10);
    const isBattleShip =
      enemySquares.indexOf(integerSquare) === -1 ? false : true;
    const squareIsOpen = squares[square] === 'O';
    const squareAlreadyUsed =
      squares[square] === 'M' || squares[square] === 'H' ? true : false;

    if (isBattleShip && squareIsOpen) {
      setStatus('HIT!');
      //calc sunk
      //calc win
      nextSquares[square] = 'H';
    } else if (squareIsOpen) {
      setStatus('Miss :(');
      nextSquares[square] = 'M';
    }
    if (squareAlreadyUsed) {
      setStatus('You already tried that one.');
    }
    setSquares(nextSquares);
  };

  return colArray.map(col => {
    const squareIndex = row + col;
    //console.log('squareIndex is ' + squareIndex);
    return (
      <Square
        value={props.squares[squareIndex]}
        key={squareIndex}
        onClick={() => {
          changeBoard(squareIndex);
        }}
        // const nextSquares = squares.slice();
        // if (calculateWinner(nextSquares) || nextSquares[squareIndex]) {
        //   return;
        // }
        // nextSquares[squareIndex] = isXNext ? 'X' : 'O'; //"x"; //////squares[3] = x
        //console.log(nextSquares);
        //setisXNext(!isXNext);
        //setSquares(nextSquares); /////set all of them every time
        //}}
      />
    );
  });
};

export default Row;
