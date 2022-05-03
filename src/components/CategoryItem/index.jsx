import './styles.scss';

const CategoryItem = ({ category: { imageUrl, title } }) => {
	// can pass JavaScript object through 'style' property, which React converts (from camelCase)
	// to CSS (kebab case)
	return (
		<div className='category-container'>
			<div
				className='background-image'
				style={{ backgroundImage: `url(${imageUrl})` }}
			></div>
			<div className='category-body-container'>
				<h2>{title}</h2>
				<p>Shop Now</p>
			</div>
		</div>
	);
};

export default CategoryItem;
