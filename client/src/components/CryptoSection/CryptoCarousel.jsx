import slide1 from '../../images/cryptophotos/slide1.jpg'
import slide2 from '../../images/cryptophotos/slide2.jpg'
import slide3 from '../../images/cryptophotos/slide3.jpg'
import slide4 from '../../images/cryptophotos/slide4.jpg'
import slide5 from '../../images/cryptophotos/slide5.jpg'

import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

var React = require('react');


function CryptoCarousel (){
        return (
            <Carousel>
                <div>
                    <img src={slide1} alt='slide1'/>
                    <p className="legend">All of our prices shows a Bitcoin Price for example</p>
                </div>
                <div>
                    <img src={slide2} alt='slide2'/>
                    <p className="legend">Into Checkout, click "Checkout using Coinpayments"</p>
                </div>
                <div>
                    <img src={slide3} alt='slide3'/>
                    <p className="legend">Click "Continue"</p>
                </div>
                <div>
                    <img src={slide4} alt='slide4'/>
                    <p className="legend">Choose the crypto with you want to pay.</p>
                </div>
                <div>
                    <img src={slide5} alt='slide5' />
                    <p className="legend">Into this page you see the address and the amount of crypto to make your payment. </p>
                </div>
            </Carousel>
        );
    }


export default CryptoCarousel;
