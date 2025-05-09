import { useState } from 'react';
import { GameLayout } from './GameLayout';

const WIN_PATTERNS = [
	[0, 1, 2], [3, 4, 5], [6, 7, 8], // Варианты побед по горизонтали
	[0, 3, 6], [1, 4, 7], [2, 5, 8], // Варианты побед по вертикали
	[0, 4, 8], [2, 4, 6] // Варианты побед по диагонали
];
const array = ['', '', '', '', '', '', '', '', '',]

export const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(array);

	const handleCellClick = (index) => {
		if (field[index] !== '' || isGameEnded) return

		const newField = [...field];
		newField[index] = currentPlayer;
		setField(newField);

		checkWinner(newField);
		checkDraw(newField);
		switchPlayer()
	};

	const checkWinner = (field) => {
		const isWon = WIN_PATTERNS.some(pattern =>
			pattern.every(index => field[index] === currentPlayer));

		if (isWon) {
			setIsGameEnded(true);
			setCurrentPlayer(field[index]);
		}
	};

	const checkDraw = (field) => {
		if (!field.includes('') && !isGameEnded) setIsDraw(true);
	};

	const switchPlayer = () => {
		if (!isGameEnded && !isDraw) {
			setCurrentPlayer(prev => prev === 'X' ? 'O' : 'X');
		}
	};
	const handleNewGame = () => {
		setField(array);
		setCurrentPlayer('X');
		setIsGameEnded(false);
		setIsDraw(false);
	}
	console.log('hello')
	return (
		<GameLayout
			currentPlayer={currentPlayer}
			isGameEnded={isGameEnded}
			isDraw={isDraw}
			field={field}
			handleCellClick={handleCellClick}
			handleNewGame={handleNewGame}
		/>
	)

}