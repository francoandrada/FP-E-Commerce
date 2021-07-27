import { useDispatch } from 'react-redux';
import styles from './CryptoSection.module.css';
import slide1 from '../../images/cryptophotos/slide1.jpg';
import slide2 from '../../images/cryptophotos/slide2.jpg';
import slide3 from '../../images/cryptophotos/slide3.jpg';
import CryptoCarousel from './CryptoCarousel'

function CryptoView() {
	return (
		<div className={styles.AboutViewContainer}>
			<div>
				<h1>Crypto Payments!</h1>
				<p>
					<br></br>Happily we are starting to accept crypto currencies as
					payments!
					<br></br>As you know, they are increasingly in demand and we want to
					give our customers as many alternatives as we can and they deserved!
					<br></br>We are using the services of World’s Most Trusted Crypto
					Payments Partner:{' '}
					<a href={`https://www.coinpayments.net/`} target='blank'>
						Coinpayments
					</a>
					.<br></br>
					<br></br>Below, you'll see a brief "How to" where we explain you the
					simple it's!.
				</p>
                <CryptoCarousel/>


			</div>
		</div>
	);
}

export default CryptoView;
