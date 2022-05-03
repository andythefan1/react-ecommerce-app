import CategoryItem from '../CategoryItem/index';
import './styles.scss';

const CategoriesContainer = ({ categories }) => {
	return (
		<div className='categories-container'>
			{categories.map((category) => (
				<CategoryItem category={category} key={category.id} />
			))}
		</div>
	);
};

export default CategoriesContainer;
