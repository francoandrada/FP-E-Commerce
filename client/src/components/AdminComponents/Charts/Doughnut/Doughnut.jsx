import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountOfBrand } from '../../../../Redux/actions';
import { Doughnut } from 'react-chartjs-2';

const DoughnutChart = () => {
	const dispatch = useDispatch();
	const { brandCount } = useSelector((state) => state.admin);

	useEffect(() => {
		dispatch(getCountOfBrand());
	}, [dispatch]);
	brandCount && console.log('brandCount', brandCount);

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

	const randomRGBA = () => {
		let o = Math.round;
		let r = Math.random;
		let s = 255;
		return (
			'rgba(' +
			o(r() * s) +
			',' +
			o(r() * s) +
			',' +
			o(r() * s) +
			',' +
			r().toFixed(1) +
			')'
		);
	};

	const randomColors = () => {
		return brandCount
			? [...Array(brandCount.length).keys()].map(() => randomRGBA())
			: [];
	};

	const data = {
		labels: brandNames(),
		datasets: [
			{
				label: 'Brands',
				data: brandValues(),
				background: randomHexColors(),
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
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				width: '500px',
				height: '500px',
				background: '#2C2E43',
			}}
		>
			{brandCount ? (
				<Doughnut data={data} options={options} />
			) : (
				<h1>Loading...</h1>
			)}
		</div>
	);
};

export default DoughnutChart;
