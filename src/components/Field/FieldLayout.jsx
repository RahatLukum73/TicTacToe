import styles from './FieldLayout.module.css';
import PropTypes from 'prop-types';

export const FieldLayout = ({field = [], handleCellClick}) => {
	return (
		<div className={styles.field}>
			{field.map((cell, index) => (
				<button key={index}
				className={styles.cell}
				onClick={() => handleCellClick(index)}
				disabled={cell !== ''}
				>
					{cell}
				</button>
			))}
		</div>
	);
};

FieldLayout.propTypes = {
	field: PropTypes.arrayOf(PropTypes.string).isRequired,
	handleCellClick: PropTypes.func.isRequired
 };