import { InformationLayout } from './InformationLayout';
import PropTypes from 'prop-types';

export const Information = ({ currentPlayer, isGameEnded, isDraw }) => {
	let status;
	if (isDraw) {
		status = 'Ничья';
	} else if (isGameEnded) {
		status = `Победа: ${currentPlayer}`;
	} else {
		status = `Ходит: ${currentPlayer}`;
	};
	return <InformationLayout status={status} />;
};

Information.propTypes = {
	currentPlayer: PropTypes.oneOf(['X', '0']).isRequired,
	isGameEnded: PropTypes.bool.isRequired,
	isDraw: PropTypes.bool.isRequired,
};