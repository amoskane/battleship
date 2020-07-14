import React from 'react';
import Square from './Square';

const Row = props => {
  const colArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const row = props.index.toString();
  const {
    enemySquares,
    setEnemySquares,
    squares,
    setSquares,
    enemyShip,
    setStatus,
    isPlayMode,
    setIsPlayMode
  } = props;

  const changeBoard = square => {
    const nextSquares = [...squares];
    const integerSquare = parseInt(square, 10);
    const flatEnemySquares = enemySquares.flat();

    const squareIsBattleShip =
      flatEnemySquares.indexOf(integerSquare) === -1 ? false : true;
    const squareIsOpen = squares[square] === 'O';
    const squareAlreadyUsed =
      squares[square] === 'M' || squares[square] === 'H' ? true : false;

    const isLastHit = nextSquares => {
      const found = nextSquares.filter(square => square === 'H') || [];
      //Assuming that a player always has the same number of claimed squares, 15. But magic numbers are BAD!
      return found.length === 15 ? true : false;
    };

    const isShipSunk = nextSquares => {
      //go through each array and check for square
      let selectedShip = [];
      enemySquares.forEach(shipArr => {
        shipArr.forEach(shipLoc => {
          const integerSquare = parseInt(square, 10);
          if (shipLoc === integerSquare) {
            selectedShip = shipArr;
          }
        });
      });

      //now you know the ship. is every item hit?
      const shipOfBooleans = selectedShip.map(shipLoc => {
        return nextSquares[shipLoc] === 'H';
      });

      const isSquareTrue = bool => bool === true;
      const isShipSunk = shipOfBooleans.every(isSquareTrue);

      return isShipSunk;
    };

    if (squareIsBattleShip && squareIsOpen) {
      nextSquares[square] = 'H';

      //calc win
      isLastHit(nextSquares) ? setStatus('YOU WON!') : setStatus('HIT!');

      //calc sunk
      isShipSunk(nextSquares)
        ? setStatus('YOU SUNK MY BATTLESHIP!!')
        : setStatus("You Don't Have Me Yet!");
    } else if (squareIsOpen) {
      setStatus('Miss :(');
      nextSquares[square] = 'M';
    }
    if (squareAlreadyUsed) {
      setStatus('You already tried that one.');
    }
    setSquares(nextSquares);
  };

  const setBoard = square => {
    const nextSquares = [...squares];
    enemyShip.push(square);

    nextSquares[square] = 'S';
    setSquares(nextSquares);
  };

  const setHandler = squareIndex =>
    isPlayMode ? changeBoard(squareIndex) : setBoard(squareIndex);

  return colArray.map(col => {
    const squareIndex = row + col;
    return (
      <Square
        value={props.squares[squareIndex]}
        key={squareIndex}
        onClick={() => {
          setHandler(squareIndex);
        }}
      />
    );
  });
};

export default Row;
