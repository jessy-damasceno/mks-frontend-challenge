import styled from '@emotion/styled';
import { IconButton } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FlexBox from '@/components/flexBox';

type CartCounterProps = {
	handleClick: () => void;
};

export default function CartCounter(props: CartCounterProps) {
	const { handleClick } = props;
	const value = 0;

	return (
		<CustomBox>
			<IconButton onClick={handleClick}>
				<ShoppingCartOutlinedIcon sx={{ mr: 1 }} />
				{value}
			</IconButton>
		</CustomBox>
	);
}

const CustomBox = styled(FlexBox)(() => ({
	borderRadius: 8,
	width: 90,
	height: 45,
	backgroundColor: '#FFF',
	justifyContent: 'center',
	alignItems: 'center',
}));
