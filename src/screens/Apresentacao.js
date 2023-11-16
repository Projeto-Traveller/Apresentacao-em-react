import styled from 'styled-components';
import { Flex, Box } from 'reflexbox';
import { Spaces } from '../shared/DesignTokens';
import { CardInt } from '../components/CardInt/CardInt';


const CardGrid = styled(Box)`
	display: grid;
	grid-template-columns: 1fr;
	gap: ${Spaces.ONE_HALF};
	@media (min-width: 1024px) {
		grid-template-columns: 1fr 1fr 1fr 1fr;
		gap: ${Spaces.TWO};
	}
`
export function Present() {
	return (
		<Flex>
			<CardGrid px={[Spaces.ONE, Spaces.TWO]} pb={[Spaces.ONE, Spaces.TWO]}>
				<CardInt nome="Leonardo Jin Izumi" profissao="Cozinheiro, Sushiman" hobbies="Comer, Dormir e Jogar" foto="../assets/images/photos/jin.jpg" />
				<CardInt />
				<CardInt />
				<CardInt />
			</CardGrid>
		</Flex>
	);
}