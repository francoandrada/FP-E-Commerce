import React from 'react';
import Admin from '../Admin/Admin';
import styles from '../AdminCategories/AdminCategories.module.css';
import styled from 'styled-components';

const Mapouter = styled.div`
	text-align: right;
	height: 500px;
	width: 500px;
    display: flex;
    margin: auto;
    justify-content: center;
`;

const GmapCanvas = styled.div`
	overflow: hidden;
	background: none !important;
	display: flex;
	margin: auto;
	justify-content: center;
	height: 470px;
	width: 470px;
`;

function Address() {
	return (
		<>
			<div>
				<Admin />
			</div>
			<div className={styles._container}>
				<div>
					<h1>Store addresses</h1>
				</div>
				<div className={styles.categoriesContainer}>
				<div>
					<Mapouter>
						<GmapCanvas>
							<iframe
								width='600'
								height='500'
								id='gmap_canvas'
								src='https://www.google.com/maps/d/embed?mid=1yREbT8xqpNESK0iWhBhaEchTVC7zXYyD'
								frameborder='0'
								scrolling='no'
								marginheight='0'
								marginwidth='0'
								title='hola'
							></iframe>
							<a href='https://fmovies-online.net'> </a>
						</GmapCanvas>
					</Mapouter>
				</div>
			</div>
			</div>
		</>
	);
}
export default Address;
