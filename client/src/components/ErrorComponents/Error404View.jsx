import style from './ErrorComponents.module.css';


function Error404View() {


	return (
		<div className={style.errorContainer}>
            <div className={style.error404Image}></div>
		</div>
	);
}

export default Error404View;