import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import HighlightProd from '../HighlightProd/HighlightProd'
import './Highlights.css'


function Highlights() {
    const dispatch = useDispatch()
    const highlights = useSelector(state => state.product.highlights)
   
    const [ currentPage, setPage ] = useState({
        first: 0,
        last: 3
        })


    function handleNextPage (event) {
        event.preventDefault()
        setPage({...currentPage, 
            first: currentPage.first + 3,
            last: currentPage.last + 3
        })        
    } 

    function handlePrevPage (event) {
        event.preventDefault()
        if (currentPage.first === 0){
            setPage({...currentPage, 
                first: 0,
                last: 3
            })

        } else {
            setPage({...currentPage, 
                first: currentPage.first - 3,
                last: currentPage.last - 3
            })
        }
      
    } 

    return (
        <div>

            
            
        
            <div>   
                <div className="divCarrousel" >  
                <button className="botonCarrousel" onClick={handlePrevPage}>PREV</button>
                    {   
                        highlights.length !== 0 && highlights.slice(currentPage.first, currentPage.last)
                        .map(el => {
                        return <div key={el.id}> 
                            <HighlightProd
                                id ={el.id}
                                image={el.image}
                                name={el.name}
                                price={el.price}
                            />
                            </div>})
                    }
                    <button className="botonCarrousel" onClick={handleNextPage}>NEXT</button>
                </div>   
            </div>

        </div>
    )
}

export default Highlights