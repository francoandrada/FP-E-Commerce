import './Footer.css';
import styles from './Footer.module.css';
import { AiFillGithub } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Footer() {
	return (
		<div className={styles.footerContainer}>
			<div className={styles.footerInfo}>
				<div className={styles.logoContainer}>
					<Link to='/'>
						<h1 className={styles.logo}>HardwareStore</h1>
					</Link>
				</div>
				<div className={styles.contentContainer}>
					<Link to='/'>
						<span>Home</span>
					</Link>
					&nbsp;
					<Link to='/catalog'>
						<span>Catalog</span>
					</Link>
				</div>
				<div className={styles.contentContact}>
					<div className={styles.containerGit}>
						<a
							href='https://github.com/francoandrada/FP-E-Commerce'
							className={styles.gitLink}
						>
							<AiFillGithub className={styles.iconGit} />
						</a>
					</div>
					<div></div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
