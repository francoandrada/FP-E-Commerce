import DoughnutChart from './Doughnut/Doughnut';
import BarChart from './BarChart/BarChart';
import './Charts.css';

const Charts = () => {
	return (
		<div className='chart-container-ecommerce'>
			<div className='chart-ecommerce'>
				<h2 className='chart-title'>Brands</h2>
				<div className='chart-graphic'>
					<DoughnutChart />
				</div>
			</div>
			<div className='chart-ecommerce'>
				<h2 className='chart-title'>Categories</h2>
				<div className='chart-graphic'>
					<BarChart />
				</div>
			</div>
		</div>
	);
};

export default Charts;
