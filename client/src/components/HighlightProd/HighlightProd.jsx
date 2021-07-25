import React from 'react';
import { Link } from 'react-router-dom';
import ButtonRed from '../StyledComponents/ButtonRed';
import ButtonCrypto from '../StyledComponents/ButtonCrypto'
import SubtitleStyle from '../StyledComponents/SubtitleStyle';
import TitleStyle from '../StyledComponents/TitleStyle';
import './HighlightProd.css';
import { useSelector, useDispatch } from 'react-redux';


function HighlightProd({ id, image, name, price }) {

	const arsBtc = useSelector((state) => state.crypto.arsBtc);
	const rateUpdateTime = useSelector((state) => state.crypto.updateTime);

	const btcRate = parseFloat(arsBtc)

	// console.log(parseFloat(arsBtc))
	const date = new Date(rateUpdateTime * 1000);
	// console.log(date)

	console.log(price)


	var formatNumber = {
		separator: '.',
		decimalSeparator: ',',
		formatear: function (num) {
			num += '';
			var splitStr = num.split('.');
			var splitLeft = splitStr[0];
			var splitRight =
				splitStr.length > 1 ? this.decimalSeparator + splitStr[1] : '';
			var regx = /(\d+)(\d{3})/;
			while (regx.test(splitLeft)) {
				splitLeft = splitLeft.replace(regx, '$1' + this.separator + '$2');
			}
			return this.simbol + splitLeft + splitRight;
		},
		new: function (num, simbol) {
			this.simbol = simbol || '';
			return this.formatear(num);
		},
	};
	var formatPrice = formatNumber.new(price, '$');

	return (
		<div>
			<div className='highlightProdContainer'>
				<div className='highlightInfoContainer'>
					<Link className='highlightLinks' to={`/catalog/${id}`}>
						<div className='ImageDiv'>
							<img className='HighlightImagSize' src={image} alt='Product' />
						</div>

						<div className='HighlightTextContainer'>
							<SubtitleStyle className='nameProduct'>{name}</SubtitleStyle>
							<span className='priceProduct'>{formatPrice}</span>
						</div>
					</Link>
					<div className='buyHighlightDiv'>
						<Link to={`/catalog/${id}`}>
							<ButtonRed>More Info</ButtonRed>
						</Link>
						<ButtonCrypto>₿ {(price*btcRate).toFixed(6)}</ButtonCrypto>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HighlightProd;
