function StatisticsIcon({ color = 'black' }) {
	return (
		<>
			<svg
				width={12}
				height={20}
				viewBox='0 0 12 20'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<path d='M0 9H2V20H0V9Z' fill={color} />
				<path d='M5 0H7V20H5V0Z' fill={color} />
				<path d='M10 6H12V20H10V6Z' fill={color} />
			</svg>
		</>
	);
}

export default StatisticsIcon;
