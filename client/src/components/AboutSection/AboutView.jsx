import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom'
import styles from './AboutView.module.css';
import photoAna from '../../images/aboutphotos/anaphcolor.jpg'
import photoNico from '../../images/aboutphotos/nicophcolor.jpg'
import photoCele from '../../images/aboutphotos/celephcolor.png'
import photoEstefi from '../../images/aboutphotos/estefiphcolor.jpg'
import photoFranco from '../../images/aboutphotos/francophcolor.jpg'
import photoTomy from '../../images/aboutphotos/tomyphcolor.jpg'
import photoJorge from '../../images/aboutphotos/jorgephcolor.png'


function AboutView() {
	return (
		<div className={styles.AboutViewContainer}>
			<div>
				<h1>About us</h1>
                <p> Hi! Let us present ourselves, we are: Ana, Celena, Estefania, Franco, Jorge and Nicolas and Tomas. We are a team of dedicated and responsible full stack developers. 
                    <br></br>This Hardware e-commerce was built using  Javascript, React, Redux, NodeJs, Express, Sequelize and SCRUM.
                    <br></br>If you would like to know more about each one of us, take a look at our profile links below.
                </p>

            <div className={styles.photosAboutContainer}>
                <a href='https://github.com/salomone2401'>
                <div className={styles.photosDivAbout}>
                    <img src={photoAna} className={styles.photosAbout}/>
                </div>
                </a>

                <a href='https://github.com/celenagonzalez'>
                <div className={styles.photosDivAbout}>
                    <img src={photoCele} className={styles.photosAbout}/>
                </div>
                </a>

                <a href='https://github.com/estePecora'>
                <div className={styles.photosDivAbout}>
                    <img src={photoEstefi} className={styles.photosAbout}/>
                </div>
                </a>

                <a href='https://github.com/francoandrada'>
                <div className={styles.photosDivAbout}>
                    <img src={photoFranco} className={styles.photosAbout}/>
                </div>
                </a>

                <a href='https://github.com/HELL0ANTHONY'>
                <div className={styles.photosDivAbout}>
                    <img src={photoJorge} className={styles.photosAbout}/>
                </div>
                </a>

                <a href='https://github.com/mariachi9999'>
                <div className={styles.photosDivAbout}>
                    <img src={photoNico} className={styles.photosAbout}/>
                </div>
                </a>

                <a href='https://github.com/Tomrj4'>
                <div className={styles.photosDivAbout}>
                    <img src={photoTomy} className={styles.photosAbout}/>
                </div>
                </a>
                
            </div>
                
			</div>
		</div>
	);
}

export default AboutView;
