import { Field } from '../Field/Field';
import { Information } from '../Information/Information';
import styles from './GameLayout.module.css';

export const GameLayout = ({
	currentPlayer,
	isGameEnded,
	isDraw,
	field,
	handleCellClick,
	handleNewGame
}) => {
	return (
		<div className={styles.game}>
			<Information
			currentPlayer={currentPlayer}
			isGameEnded={isGameEnded}
			isDraw={isDraw} />
			<Field field={field} handleCellClick={handleCellClick} />
			<button
				className={styles.newGameButton}
				onClick={handleNewGame}
			>
				Начать заново
			</button>
		</div>
	)
}