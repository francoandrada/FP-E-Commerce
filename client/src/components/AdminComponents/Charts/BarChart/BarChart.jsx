import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Bar } from 'react-chartjs-2';
import { getCountOfCategories } from '../../../../Redux/actions';
import Loader from '../../../Loader/Loader';

const BarChart = () => {
	const [colors, setColors] = useState([]);
	const dispatch = useDispatch();
	const { categoriesCount } = useSelector((state) => state.admin);

	useEffect(() => {
		dispatch(getCountOfCategories());
	}, [dispatch]);

	const categoryNames = () => {
		const a = categoriesCount ? categoriesCount.map((b) => Object.keys(b)) : [];
		return a.flat();
	};

	const categoryValues = () => {
		const a = categoriesCount
			? categoriesCount.map((b) => Object.values(b))
			: [];
		return a.flat();
	};

	console.log('values', categoryValues());

	const randomHexColor = () => {
		const letters = '0123456789ABCDEF';
		let color = '#';
		for (let i = 0; i < 6; i++)
			color += letters[Math.floor(Math.random() * 16)];
		return color;
	};

	const randomHexColors = () => {
		return categoriesCount
			? [...Array(categoriesCount.length).keys()].map(() => randomHexColor())
			: [];
	};

	useEffect(() => {
		setColors(randomHexColors());
	}, [categoriesCount]);

	const data = {
		labels: categoryNames(),
		datasets: [
			{
				label: 'Categories',
				data: categoryValues(),
				backgroundColor: colors,
			},
		],
	};

	console.log('categories', categoriesCount);

	return (
		<div style={{ width: '500px', height: '500px', padding: '5px' }}>
			{categoriesCount ? <Bar data={data} /> : <Loader />}
		</div>
	);
};

export default BarChart;
