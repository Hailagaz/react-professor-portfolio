import { Container, Typography, Box } from '@mui/material';

const SocialAccounts = () => {
	return (
		<Container maxWidth="lg">
			<Typography variant="h4">Social Accounts</Typography>
			<Box display="flex" justifyContent="space-between">
				<Typography variant="body1">Facebook: <a href="#">Link</a></Typography>
				<Typography variant="body1">Twitter: <a href="#">Link</a></Typography>
				<Typography variant="body1">LinkedIn: <a href="#">Link</a></Typography>
			</Box>
		</Container>
	);
};

export default SocialAccounts;