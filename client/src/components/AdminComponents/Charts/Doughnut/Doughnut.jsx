import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountOfBrand } from '../../../../Redux/actions';
import { Doughnut } from 'react-chartjs-2';
import Loader from '../../../Loader/Loader';

const DoughnutChart = () => {
	const dispatch = useDispatch();
	const [colors, setColors] = useState([]);
	const { brandCount } = useSelector((state) => state.admin);

	useEffect(() => {
		dispatch(getCountOfBrand());
	}, [dispatch]);

	const brandNames = () => {
		const a = brandCount && brandCount.map((b) => Object.keys(b));
		return [a].flat();
	};

	const brandValues = () => {
		const a = brandCount && brandCount.map((b) => Object.values(b));
		return [a].flat();
	};

	const randomHexColor = () => {
		const letters = '0123456789ABCDEF';
		let color = '#';
		for (let i = 0; i < 6; i++)
			color += letters[Math.floor(Math.random() * 16)];
		return color;
	};

	const randomHexColors = () => {
		return brandCount
			? [...Array(brandCount.length).keys()].map(() => randomHexColor())
			: [];
	};

	useEffect(() => {
		setColors(randomHexColors());
	}, [brandCount]);

	const data = {
		labels: brandNames(),
		datasets: [
			{
				label: 'Brands',
				data: brandValues(),
				backgroundColor: colors,
			},
		],
	};

	const options = {
		title: {
			display: true,
			text: 'Brands',
		},
	};

	return (
		<div style={{ width: '500px', height: '500px' }}>
			{brandCount ? (
				<Doughnut height={500} width={700} data={data} options={options} />
			) : (
				<Loader />
			)}
		</div>
	);
};
export default DoughnutChart;
