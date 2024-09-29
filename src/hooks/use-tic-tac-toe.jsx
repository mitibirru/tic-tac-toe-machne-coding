import { useState } from "react";

const initialBoard = () => new Array(9).fill("X");

const useTicTacToe = () => {
  const [board, setBoard] = useState(initialBoard());
  const [isXNext, setIsXNext] = useState(true);

  const WINNING_PATTERNS = [];

  const getStatusMessage = () => {};

  const resetGame = () => {};

  const calculateWinner = () => {};

  const handleClick = () => {};

  return { board, calculateWinner, handleClick, getStatusMessage, resetGame };
};

export default useTicTacToe;
