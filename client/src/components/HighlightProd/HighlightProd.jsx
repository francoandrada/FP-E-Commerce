import React from 'react';
import { Link } from 'react-router-dom';
import ButtonRed from '../StyledComponents/ButtonRed';
import SubtitleStyle from '../StyledComponents/SubtitleStyle';
import TitleStyle from '../StyledComponents/TitleStyle';
import './HighlightProd.css';

function HighlightProd({ id, image, name, price }) {
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
				<div>
					<Link className='highlightLinks' to={`/catalog/${id}`}>
						<div className='ImageDiv'>
							<img
								className='HighlightImagSize'
								src={image}
								alt='Product Image'
							/>
						</div>

						<div className='HighlightTextContainer'>
							<SubtitleStyle>{name}</SubtitleStyle>
							<TitleStyle>{formatPrice}.-</TitleStyle>
						</div>
					</Link>

					<div className='buyHighlightDiv'>
						<Link to={'/register'}>
							<ButtonRed>Buy</ButtonRed>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HighlightProd;
