import { AppBar, Container, styled } from '@mui/material';
import Brand from '@/components/brand';
import CartCounter from './CartCounter';

export default function Header() {
	const handleClick = () => {
		console.log('setOpen(true)');
	};

	return (
		<CustomBar position='sticky'>
			<FlexContainer maxWidth='lg' fixed>
				<Brand />
				<CartCounter handleClick={handleClick} />
			</FlexContainer>
		</CustomBar>
	);
}

const CustomBar = styled(AppBar)(() => ({
	backgroundColor: '#0F52BA',
	height: 100,
	borderBottom: '1px solid #0847A8',
}));

const FlexContainer = styled(Container)(() => ({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	height: 100,
}));
