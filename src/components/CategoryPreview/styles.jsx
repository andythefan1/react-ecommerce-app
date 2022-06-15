import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CategoryPreviewContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 30px;
`;

export const CategoryPreviewHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const CategoryPreviewTitle = styled(Link)`
	cursor: pointer;
`;

export const CategoryPreviewPreview = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	column-gap: 20px;
`;
