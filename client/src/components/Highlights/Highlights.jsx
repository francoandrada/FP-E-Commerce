import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import HighlightProd from '../HighlightProd/HighlightProd';
import './Highlights.css';
import { BsChevronRight } from 'react-icons/bs';
import { BsCaretLeftFill, BsCaretRightFill } from 'react-icons/bs';
import Loader from '../Loader/Loader'
function Highlights() {
	const dispatch = useDispatch();
	const highlights = useSelector((state) => state.product.highlights);

	const [currentPage, setPage] = useState({
		first: 0,
		last: 3,
	});

	function handleNextPage(event) {
		event.preventDefault();
		setPage({
			...currentPage,
			first: currentPage.first + 3,
			last: currentPage.last + 3,
		});
	}

	function handlePrevPage(event) {
		event.preventDefault();
		if (currentPage.first === 0) {
			setPage({ ...currentPage, first: 0, last: 3 });
		} else {
			setPage({
				...currentPage,
				first: currentPage.first - 3,
				last: currentPage.last - 3,
			});
		}
	}

	return (
		<div>
			<div>
				<div className='divCarrousel'>
					<div className='Carrousel'>
						{highlights.length !== 0 ?
							highlights
								.slice(currentPage.first, currentPage.last)
								.map((el) => {
									return (
										<div key={el.id}>
											<HighlightProd
												id={el.id}
												image={el.image}
												name={el.name}
												price={el.price}
											/>
										</div>
									);
								}) : <Loader />
							}
					</div>
					<div className='IconsContainer'>
						<div className='containerIcon'>
							<BsCaretLeftFill
								className='icon'
								onClick={handlePrevPage}
							></BsCaretLeftFill>
						</div>
						<div className='containerIcon'>
							<BsCaretRightFill
								className='icon'
								onClick={handleNextPage}
							></BsCaretRightFill>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Highlights;
