import { SelectStyles } from './Select.styles.js';

const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1);
const titleCase = (string) => {
	return string.toLowerCase().split(' ').map(capitalize).join(' ');
};

const Select = ({ initialValue, onChange, values }) => {
	return (
		<SelectStyles value={initialValue} onChange={onChange}>
			{values.map((value, index) => (
				<option key={index} value={value}>
					{value === 'string' ? titleCase(value) : value}
				</option>
			))}
		</SelectStyles>
	);
};

export default Select;
