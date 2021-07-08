import { useState } from 'react';
import SearchBar from '../Searchbar/SearchBar.jsx';

const defaultOptions = [];
for (let i = 0; i < 10; i++) {
	defaultOptions.push(`option ${i}`);
	defaultOptions.push(`suggestion ${i}`);
	defaultOptions.push(`advice ${i}`);
}

function Navbar() {
	const [options, setOptions] = useState([]);
	const onInputChange = (event) => {
		const searchValue = event.target.value;
		setOptions(defaultOptions.filter((option) => option.includes(searchValue)));
	};

	return (
		<div>
			<h1>Navbar</h1>
			<button>Search</button>
			<SearchBar options={options} onInputChange={onInputChange} />
		</div>
	);
}

export default Navbar;
