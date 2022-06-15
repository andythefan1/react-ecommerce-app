import {
	DashboardItemContainer,
	BackgroundImage,
	DashboardItemBody,
} from './styles';

const DashboardItem = ({ category: { imageUrl, title } }) => {
	// can pass JavaScript object through 'style' property, which React converts (from camelCase)
	// to CSS (kebab case)
	return (
		<DashboardItemContainer to={`/shop/${title}`}>
			<BackgroundImage
				className='background-image'
				style={{ backgroundImage: `url(${imageUrl})` }}
			></BackgroundImage>
			<DashboardItemBody>
				<h2>{title.toUpperCase()}</h2>
				<p>SHOP NOW</p>
			</DashboardItemBody>
		</DashboardItemContainer>
	);
};

export default DashboardItem;
