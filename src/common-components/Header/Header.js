import styled from 'styled-components';
import { Colors, FontSizes, Spaces } from '../../shared/DesignTokens';
const Wrapper = styled.header`
	width: 100%;
	height: 60px;
	background-color: ${Colors.NEUTRAL_BLACK};
	padding: ${Spaces.TWO};
	display: flex;
	justify-content: center;
	align-items: center;
    color: ${Colors.GRAY_400};
    font-size: ${FontSizes.THREE};
	@media (min-width: 1024px) {
		height: 90px;
	}
`;
export function Header() {
	return (
		<Wrapper>Grupo 47(?)</Wrapper>
	);
}