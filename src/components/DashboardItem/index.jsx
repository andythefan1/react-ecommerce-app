import { useNavigate } from 'react-router-dom';

import {
	DashboardItemContainer,
	BackgroundImage,
	DashboardItemBody,
} from './styles';

const DashboardItem = ({ category: { imageUrl, title, route } }) => {
	const navigate = useNavigate();

	const handleNavigate = () => navigate(route);
	/**  can pass JavaScript object through 'style' property, which React 
	converts (from camelCase)
	 to CSS (kebab case) */
	return (
		<DashboardItemContainer onClick={handleNavigate}>
			<BackgroundImage imageUrl={imageUrl}></BackgroundImage>
			<DashboardItemBody>
				<h2>{title.toUpperCase()}</h2>
				<p>SHOP NOW</p>
			</DashboardItemBody>
		</DashboardItemContainer>
	);
};

export default DashboardItem;
