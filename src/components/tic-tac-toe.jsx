// react imports
import { useState } from "react";

// hooks imports
import useTicTacToe from "../hooks/use-tic-tac-toe";

// styles imports
import "../styles.css";

export default function TicTacToe() {
  const { board, calculateWinner, handleClick, getStatusMessage, resetGame } =
    useTicTacToe();

  return (
    <div className="game">
      <div className="status">
        {getStatusMessage()}
        <button onClick={resetGame} className="reset-button">
          Reset Game
        </button>
      </div>
      <div className="board">
        {board.map((_, index) => {
          return (
            <div className="cell" key={index}>
              {board[index]}
            </div>
          );
        })}
      </div>
    </div>
  );
}
