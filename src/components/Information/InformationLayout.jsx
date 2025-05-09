import styles from './InformationLayout.module.css';

export const InformationLayout = ({ status }) => (
	<div className={styles.information}>
		<h2>{status}</h2>
	</div>
);