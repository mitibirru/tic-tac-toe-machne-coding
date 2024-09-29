import { useEffect, useState } from 'react';

const initialBoard = dimension => new Array(dimension * dimension).fill(null);

const useTicTactToe = dimension => {
	const [board, setBoard] = useState(initialBoard(dimension));
	const [isXNext, setIsXNext] = useState(true);
	const [winner, setWinner] = useState(null); // 'X' | 'O' | 'tie'
	const [message, setMessage] = useState(`Now it is ${isXNext ? 'X' : 'O'}'s turn`);

	const getStatusMessage = () => {
		if (winner?.player === 'tie') return "Wola! It's a Tie";
		if (winner?.player === 'X') return 'X won';
		if (winner?.player === 'O') return 'O won';
		return `Now it is ${isXNext ? 'X' : 'O'}'s turn`;
	};

	useEffect(() => {
		setMessage(getStatusMessage());
	}, [winner, board]);

	const handleSquareClick = index => {
		if (board[index] || winner) return;

		setWinner(() => {
			board[index] = isXNext ? 'X' : 'O';
			setIsXNext(!isXNext);
			setBoard([...board]);
			return calulateWinner(board);
		});
	};

	const handleReset = () => {
		setBoard(initialBoard(dimension));
		setIsXNext(true);
		setWinner(null);
	};

	return {
		board,
		message,
		handleReset,
		handleSquareClick,
		winner
	};
};

const calulateWinner = board => {
	const WINNING_PATTERNS = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8], // rows
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8], // columns
		[0, 4, 8],
		[2, 4, 6] // diagonals
	];

	for (let pattern of WINNING_PATTERNS) {
		const [a, b, c] = pattern;
		if (board[a] && board[a] === board[b] && board[a] === board[c])
			return {
				player: board[a],
				positions: pattern
			};
	}

	let counter = 0;
	board.forEach(val => (val ? counter++ : null));

	if (counter === board.length)
		return {
			player: 'tie',
			positions: [0, 0, 0]
		};

	return null;
};

export default useTicTactToe;
