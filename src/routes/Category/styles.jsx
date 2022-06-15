import styled from 'styled-components';

export const CategoryHeader = styled.div`
	display: flex;
	align-items: center;
`;

export const CategoryContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	column-gap: 20px;
	row-gap: 50px;
`;

export const CategoryTitle = styled.h1`
	// font-size: 38px;
	margin-bottom: 25px;
	text-align: center;
	flex: 1;
`;

export const Back = styled.div`
	flex: 1;

	&:hover {
		cursor: pointer;
	}
`;

export const Space = styled.div`
	flex: 1;
`;
