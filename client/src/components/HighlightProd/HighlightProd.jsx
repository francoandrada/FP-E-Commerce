import React from 'react';
import {Link} from 'react-router-dom'
import ButtonRed from '../StyledComponents/ButtonRed';
import SubtitleStyle from '../StyledComponents/SubtitleStyle';
import TitleStyle from '../StyledComponents/TitleStyle';
import './HighlightProd.css'

function HighlightProd({id, image, name, price}) {
 

    return (
        <div>
            
            <div className="highlightProdContainer">     
               
                <div>
                    <Link className="highlightLinks" to={`/catalog/${id}`}>
                    
                    <div className="ImageDiv">
                        <img className="HighlightImagSize" src={image} alt='Product Image'/>
                    </div>
                    
                    <div className="HighlightTextContainer">
                        <SubtitleStyle>{name}</SubtitleStyle>
                        <TitleStyle>${price}.-</TitleStyle>
                    </div>

                    </Link>
                     
                    <div className="buyHighlightDiv">
                        <Link to={'/register'}>
                            <ButtonRed>Buy</ButtonRed>
                        </Link>      
                    </div>
      
                </div>
            </div>  
            
        </div>
              
    )
};

export default HighlightProd;