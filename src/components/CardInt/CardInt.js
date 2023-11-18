import styled from 'styled-components';
import React from 'react';
import { Box } from 'reflexbox';
import { Card } from '../../common-components/Card/Card';
import { Caption } from '../../common-components/Caption/Caption';
import { Description } from '../../common-components/Description/Description';
import { ButtonLink } from '../../common-components/ButtonLink/ButtonLink';
import {    
	BorderRadiuses,
	Colors,
	Shadows,
	Spaces,
} from '../../shared/DesignTokens';
const InformationGrid = styled(Box)`
	display: grid;
	grid-template-columns: 1fr 70px;
	gap: ${Spaces.TWO};
`;
const Foto = styled.div`
	width: 100%;
	height: 500px;
	box-shadow: ${Shadows.ONE};
	border-radius: ${BorderRadiuses.ONE};
	background-image: url('${(props) => props.src}');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
`;
export function CardInt({ id, nome, profissao, hobbies, foto}) {
	return (
		<Card>
			<Foto src={foto} />
			<InformationGrid p={Spaces.TWO} mb={Spaces.ONE_HALF}>
				<Box>
					<Caption as="div" color={Colors.GRAY_600}>
						{nome}
					</Caption>
					<Description as="div" color={Colors.GRAY_700}>
						{profissao}
					</Description>
					<Description as="div" color={Colors.GRAY_700}>
						<strong>Hobbies:</strong> {hobbies}
					</Description>
				</Box>
			</InformationGrid>
			<Box>
				<ButtonLink to={`/detalhes/${id}`}>Ver Endereço</ButtonLink>
			</Box>
		</Card>
        
	);
}