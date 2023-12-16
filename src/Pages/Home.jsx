import React from "react";
import "./homeStyles.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import ReactApexChart from "react-apexcharts";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
	labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
	datasets: [
		{
			label: "# of Votes",
			data: [12, 19, 3, 5, 2, 3],
			backgroundColor: ["blue", "lightblue", "darkblue", "orange"],
		},
	],
};

const chartData = {
	chart: {
		type: "line",
		id: "apexchart-example",
		foreColor: "deeppink",
	},
	xaxis: {
		categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
	},
	fill: {
		type: "gradient",
		gradient: {
			shade: "light",
			type: "horizontal",
			shadeIntensity: 0.5,
			gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
			inverseColors: true,
			opacityFrom: 1,
			opacityTo: 1,
			stops: [0, 50, 100],
			// colorStops: []
		},
	},
	legend: {
		// position: '',
		width: 400,
		// position: 'top',
	},
	series: [
		{
			name: "Distance Traveled",
			type: "column",
			data: [440, 505, 414, 571, 227, 413, 201, 352, 652, 320, 257, 160],
		},
		{
			name: "Time Traveled",
			type: "line",
			data: [23, 42, 35, 27, 43, 22, 17, 31, 42, 22, 12, 16],
		},
	],
};

const Home = () => {
	return (
		<React.Fragment>
			<div className="dashboard-container">
				<h5>Dashboard</h5>
				<h2 className="head">Blog Overview</h2>
				<div className="upper-container">
					<div className="card">
						<h5 className="card-head">Posts</h5>
						<h3 className="number">8,011</h3>
						<p className="percentage">-4.7%</p>
					</div>
					<div className="card">
						<h5 className="card-head">Pages</h5>
						<h3 className="number">7,051</h3>
						<p className="percentage">-4.7%</p>
					</div>
					<div className="card">
						<h5 className="card-head">Comments</h5>
						<h3 className="number">2,081</h3>
						<p className="percentage">-4.7%</p>
					</div>
					<div className="card">
						<h5 className="card-head">Users</h5>
						<h3 className="number">9,044</h3>
						<p className="percentage">-4.7%</p>
					</div>
					<div className="card">
						<h5 className="card-head">Subscribers</h5>
						<h3 className="number">10,061</h3>
						<p className="percentage">-4.7%</p>
					</div>
				</div>
				<div className="charts-container">
					<div className="area-charts">
						<ReactApexChart
							options={chartData}
							series={chartData.series}
							type="area"
							height={450}
						/>
					</div>
					<div className="chart-container">
						<Pie data={data} />;
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Home;
