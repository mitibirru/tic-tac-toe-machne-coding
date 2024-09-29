import React from 'react';
import useTicTactToe from './useTicTactToe';
import Square from './Square';
import './App.css';

const dimension = 3;

const Game = () => {
	const { board, message, handleReset, handleSquareClick, winner } = useTicTactToe(dimension);
	return (
		<div className="game">
			{/* status and reset button */}
			<div className="status">
				{message}
				<button className="reset" onClick={handleReset}>
					reset game
				</button>
			</div>

			{/* board */}
			<div className="board" style={{ gridTemplateColumns: `repeat(${dimension}, 1fr)` }}>
				{board.map((val, idx) => (
					<Square key={idx} value={val} onClick={() => handleSquareClick(idx)} />
				))}
			</div>
		</div>
	);
};

export default Game;
