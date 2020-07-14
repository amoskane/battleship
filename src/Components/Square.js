import React from 'react';
import classes from './Square.module.css';

const Square = ({ value, onClick }) => {
  const btnClasses = [classes.button];
  if (value === 'H' || value === 'S') {
    btnClasses.push(classes.dark);
  }

  return (
    <button className={btnClasses.join(' ')} onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
