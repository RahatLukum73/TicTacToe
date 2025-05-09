import PropTypes from 'prop-types';
import { FieldLayout } from './FieldLayout';

export const Field = ({ field = [], handleCellClick }) => (
	<FieldLayout field={field} handleCellClick={handleCellClick} />
);

Field.propTypes = {
	field: PropTypes.arrayOf(PropTypes.string).isRequired,
	handleCellClick: PropTypes.func.isRequired,
};