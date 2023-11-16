import styled from 'styled-components';
import { BorderRadiuses } from '../../shared/DesignTokens';
import { Colors } from '../../shared/DesignTokens';
export const Card = styled.div`
	width: 100%;
	height: 100%;
	border: 1px solid ${Colors.GRAY_200};
    border-radius: ${BorderRadiuses.ONE};
    background-color: ${Colors.NEUTRAL_BLACK};
`;