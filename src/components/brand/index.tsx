import { Box, Typography } from '@mui/material';

export default function Brand() {
	return (
		<Box>
			<Typography component='span' fontSize={40} fontWeight={600} mr={1}>
				MKS
			</Typography>
			<Typography component='span' fontSize={20} fontWeight={300}>
				Sistemas
			</Typography>
		</Box>
	);
}
