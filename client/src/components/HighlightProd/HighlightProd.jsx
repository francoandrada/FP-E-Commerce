import React from 'react';
import {Link} from 'react-router-dom'
import ButtonRed from '../StyledComponents/ButtonRed';
import TitleStyle from '../StyledComponents/TitleStyle';


function HighlightProd({id, image, name, price}) {
  

    return (
        <div>
            <div>     
                <div>
                    
                    <img src={image} alt='Product Image'/>
                
                    <div>
                      <TitleStyle>{name}</TitleStyle>
                      <TitleStyle>{price}</TitleStyle>
                      <Link to={`/catalog/${id}`}>
                          <ButtonRed>BUY</ButtonRed>
                      </Link>
                    </div>
      
                </div>
            </div>  
        </div>
              
    )
};

export default HighlightProd;