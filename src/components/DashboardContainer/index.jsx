import DashboardItem from '../DashboardItem/index';
import './styles.scss';

const DashboardContainer = ({ categories }) => {
	return (
		<div className='categories-container'>
			{categories.map((category) => (
				<DashboardItem category={category} key={category.id} />
			))}
		</div>
	);
};

export default DashboardContainer;
