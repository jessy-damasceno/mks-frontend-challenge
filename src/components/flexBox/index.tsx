import { Box } from '@mui/material';
import PropTypes from 'prop-types';

export default function FlexBox(props: { [x: string]: any; children: any }) {
	const { children, ...rest } = props;

	return (
		<Box display='flex' {...rest}>
			{children}
		</Box>
	);
}

FlexBox.propTypes = {
	children: PropTypes.any.isRequired,
};
