import { useDispatch } from 'react-redux';
import styles from './AboutView.module.css';
import photoAna from '../../images/aboutphotos/anaph.jpg'
import photoNico from '../../images/aboutphotos/nicoph.jpg'
import photoCele from '../../images/aboutphotos/celeph.png'
import photoEstefi from '../../images/aboutphotos/estefiph.jpg'


function AboutView() {
	return (
		<div className={styles.AboutViewContainer}>
			<div>
				<h1>About us</h1>
                <p> Hi! Let us present ourselves, we are: Ana, Celena, Estefania, Franco, Jorge and Nicolas. We are a team of dedicated and responsible full stack developers. 
                    <br></br>This Hardware e-commerce was built using  Javascript, React, Redux, NodeJs, Express, Sequelize and SCRUM.
                    <br></br>If you would like to know more about each one of us, take a look at our profile links below.
                </p>

            <div className={styles.photosAboutContainer}>
                <div className={styles.photosDivAbout}>
                    <img src={photoAna} className={styles.photosAbout}/>
                </div>

                <div className={styles.photosDivAbout}>
                    <img src={photoNico} className={styles.photosAbout}/>
                </div>

                <div className={styles.photosDivAbout}>
                    <img src={photoEstefi} className={styles.photosAbout}/>
                </div>

                <div className={styles.photosDivAbout}>
                    <img src={photoCele} className={styles.photosAbout}/>
                </div>
            </div>
                
			</div>
		</div>
	);
}

export default AboutView;
