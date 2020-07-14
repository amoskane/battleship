import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Board from './Board';

it('it displays a board with a title and 10 rows', () => {
  const { getByTestId } = render(<Board />);
  const board = getByTestId('board');
  expect(board.children.length).toBe(11);
});

it('it displays rows with 10 squares', () => {
  const { getAllByTestId } = render(<Board />);
  const rows = getAllByTestId('row');
  expect(rows.length).toBe(10);
});

it('onClick, value changes from "O" to "M"', () => {
  const { getAllByTestId } = render(<Board />);
  const firstRow = getAllByTestId('row')[0];
  const firstSquare = firstRow.children[0];
  expect(firstSquare.textContent).toEqual('O');
  fireEvent.click(firstSquare);
  expect(firstSquare.textContent).toEqual('M');
});
