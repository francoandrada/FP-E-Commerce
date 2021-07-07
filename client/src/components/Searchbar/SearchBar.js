import { useEffect, useRef } from 'react';

const SearchBar = ({ options, onInputChange }) => {
	const ulRef = useRef();
	const inputRef = useRef();
	useEffect(() => {
		inputRef.current.addEventListener('click', (event) => {
			event.stopPropagation();
			ulRef.current.style.display = 'flex';
			onInputChange(event);
		});
		document.addEventListener('click', (event) => {
			ulRef.current.style.display = 'none';
		});
	}, []);

	return (
		<div>
			<input
				type='text'
				placeholder='Search...'
				ref={inputRef}
				onChange={onInputChange}
			/>
			<ul ref={ulRef}>
				{options.map((option, key) => (
					<button
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
