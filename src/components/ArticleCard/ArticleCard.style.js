import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';


const ArticleCardWrapper = styled.div`
	background-image: url('${ props => props.imageUrl && props.imageUrl}');
	background-position: center; 
	border-radius: 6px;
	position: relative;
	height: 95%;
	width: 400px;
	margin: 5px;
	border: 1px solid ${themeGet('border.3', '#E6E6E6')};
	transition: box-shadow 0.3s ease;

	&:hover {
		border-color: 0;
		box-shadow: 0 0 30px ${themeGet('boxShadow.1', 'rgba(0, 0, 0, 0.16)')};
		transform: scale(1.05);
		button {
		color: ${themeGet('color.1', '#ffffff')};
		background-color: ${themeGet('primary.0', '#008489')};
		}
	}
`;

export const PricingHeader = styled.div`
	padding: 27px 29px;
	border-top-left-radius: 6px;
	border-top-right-radius: 6px;
	background-color: ${themeGet('color.2', '#F7F7F7')};
`;

export const Title = styled.h2`
	color: #ffffff;
	font-size: 22px;
	line-height: 1.2;
	font-weight: 700;
	position: absolute;
	bottom: 0;
	padding-left: 20px;
	white-space: nowrap; 
	width: 95%; 
	overflow: hidden;
	text-overflow: ellipsis; 
	text-shadow: 0px 4px 3px rgba(0,0,0,0.4),
					0px 8px 13px rgba(0,0,0,0.1),
					0px 18px 23px rgba(0,0,0,0.1);
`;

export const Article = styled.p`
	color: ${themeGet('text.0', '#2C2C2C')};
	font-size: 15px;
	line-height: 18px;
	margin-bottom: 0;
`;

export const ArticleAction = styled.div`
	padding: 30px;
	width: 100%;
	position: absolute;
	left: 0;
	bottom: 0;
	border-bottom-left-radius: 6px;
	border-bottom-right-radius: 6px;
	background-color: ${themeGet('color.1', '#ffffff')};
`;

export const Button = styled.button`
	cursor: pointer;
	min-width: 104px;
	min-height: 37px;
	border: 0;
	font-size: 15px;
	line-height: 18px;
	font-weight: 700;
	border-radius: 3px;
	color: ${themeGet('text.0', '#2C2C2C')};
	background-color: ${themeGet('color.2', '#F7F7F7')};
	transition: background-color 0.25s ease;
`;

export default ArticleCardWrapper;
