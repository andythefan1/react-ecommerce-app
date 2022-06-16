import DashboardItem from '../DashboardItem/index';
import { CategoriesContainer } from './styles';

const DashboardContainer = ({ categories }) => {
	return (
		<CategoriesContainer>
			{categories.map((category) => (
				<DashboardItem category={category} key={category.id} />
			))}
		</CategoriesContainer>
	);
};

export default DashboardContainer;
