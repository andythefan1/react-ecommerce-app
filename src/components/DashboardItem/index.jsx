import { Link } from 'react-router-dom';
import './styles.scss';

const DashboardItem = ({ category: { imageUrl, title } }) => {
	// can pass JavaScript object through 'style' property, which React converts (from camelCase)
	// to CSS (kebab case)
	return (
		<Link className='dashboard-item-container' to={`/shop/${title}`}>
			<div
				className='background-image'
				style={{ backgroundImage: `url(${imageUrl})` }}
			></div>
			<div className='dashboard-item-body'>
				<h2>{title.toUpperCase()}</h2>
				<p>SHOP NOW</p>
			</div>
		</Link>
	);
};

export default DashboardItem;
