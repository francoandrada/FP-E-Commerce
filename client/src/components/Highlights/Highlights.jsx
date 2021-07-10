import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import HighlightProd from '../HighlightProd/HighlightProd'


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

            <button onClick={handlePrevPage}>PREV</button>
            <button onClick={handleNextPage}>NEXT</button>

            <div>   
                <div>
                        
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
                </div>   
            </div>

        </div>
    )
}

export default Highlights