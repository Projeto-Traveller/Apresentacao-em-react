import styled from 'styled-components';
import { Flex, Box } from 'reflexbox';
import { Spaces } from '../shared/DesignTokens';
import { CardInt } from '../components/CardInt/CardInt';
import { Link } from "react-router-dom";


const CardGrid = styled(Box)`
	display: grid;
	grid-template-columns: 1fr;
	gap: ${Spaces.ONE_HALF};
	@media (min-width: 1024px) {
		grid-template-columns: 1fr 1fr 1fr 1fr;
		gap: ${Spaces.TWO};
	}
`

export const users = [
 { userId: '1', cep: '12954776' , nome: 'Leonardo Jin Izumi', profissao:'Cozinheiro, Sushiman', hobbies: 'Comer, Dormir e Jogar', foto: "../assets/images/photos/jin.jpg" },
{userId:'2', cep:'01001000', nome:'Ambrozio'}];

export function Present() {
	return (
		<Flex>
			<CardGrid px={[Spaces.ONE, Spaces.TWO]} pb={[Spaces.ONE, Spaces.TWO]}>
				{users.map(user => (<CardInt key={user.id} {...user} />
				))}
			</CardGrid>
		</Flex>
	);
}

