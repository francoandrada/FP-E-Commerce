import { useState } from 'react';

import { MdSearch } from 'react-icons/md';

import styles from './SearchBox.module.css';

const SearchBox = (props) => {
	// const [display, setDisplay] = useState('');
	// const [options, setOptions] = useState([]);
	// const [search, setSearch] = useState('');

	const searchConfirm = (event) => {
		event.preventDefault();
	};

	return (
		<div className={styles.searchBarContainer}>
			<div className={styles.theSearchBarEcommerce}>
				<div>
					<input
						className={styles.inputEcommerce}
						value={props.filter}
						onChange={(event) => props.setFilter(event.target.value)}
						placeholder='Search...'
					/>
				</div>
			</div>
			<MdSearch
				className={styles.searchBtnEcommerce}
				onClick={(event) => searchConfirm(event)}
			/>
		</div>
	);
};

export default SearchBox;
