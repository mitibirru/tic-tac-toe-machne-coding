import './App.css';
import React from 'react';

const Square = ({ value, onClick }) => {
	return (
		<button disabled={value} onClick={onClick} className="square">
			{value}
		</button>
	);
};

export default Square;
