import styles from './Loader.module.css';

function Loader() {
	return (
		<div className={styles.container}>
			<div className={styles.preloader}></div>
		</div>
	);
}

export default Loader;
