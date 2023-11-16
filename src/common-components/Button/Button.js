import styled from 'styled-components';
import {
	BorderRadiuses,
	Colors,
	Shadows,
	Spaces,
	FontLetterSpacings,
	FontFamilies,
	FontWeights,
    FontSizes,
} from '../../shared/DesignTokens';
export const Button = styled.button`
	border: none;
	outline: none;
	width: 100%;
	height: 40px;
	font-family: ${FontFamilies.PRIMARY};
	font-weight: ${FontWeights.BOLD};
	background-color: ${(props) => props.ghost ? Colors.NEUTRAL_BLACK : Colors.GRAY_700};
	color: ${Colors.NEUTRAL_WHITE};
	box-shadow: ${Shadows.ONE};
	border-radius: ${BorderRadiuses.ONE};
	padding: ${Spaces.ONE} ${Spaces.TWO};
	cursor: pointer;
	transition: 200ms all ease;
	text-transform: uppercase;
    letter-spacing: ${FontLetterSpacings.MEDIUM};
	font-size: ${FontSizes.ONE_QUARTER};
 
	&:hover {
		background-color: ${(props) => props.ghost ? Colors.NEUTRAL_BLACK : Colors.GRAY_700};
	}
`;