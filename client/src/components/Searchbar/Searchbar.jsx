import { useEffect, useRef } from 'react';
import './Searchbar.css';

const SearchBar = ({ options, onInputChange }) => {
	const ulRef = useRef();
	const inputRef = useRef();
	useEffect(() => {
		inputRef.current.addEventListener('click', (event) => {
			event.stopPropagation();
			if (ulRef.current !== null) {
				ulRef.current.style.display = 'flex';
				onInputChange(event);
			}
		});
		document.addEventListener('click', (event) => {
			if (ulRef.current !== null) {
				ulRef.current.style.display = 'none';
			}
		});
	}, [onInputChange]);

	return (
		<div className='suggestions-container'>
			<input
				type='text'
				placeholder='Search...'
				ref={inputRef}
				onChange={onInputChange}
			/>
			<ul className='list-suggestions' ref={ulRef}>
				{options.slice(0, 6).map((option, key) => (
					<button
						className='suggestion-items'
						onClick={(event) => {
							inputRef.current.value = option;
						}}
						key={key}
						type='button'
					>
						{option}
					</button>
				))}
			</ul>
		</div>
	);
};

export default SearchBar;
