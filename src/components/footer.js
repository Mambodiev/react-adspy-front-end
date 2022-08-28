
import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';

export default function FlexGrow() {
  return (
		
    <div style={{ width: '100%' }}>
		<Container component="main" maxWidth="lg">
			<Divider />
			<Box display="flex" p={1}>
				<Box p={1} flexGrow={1}>
				<Link href="#" color="inherit">
					© {new Date().getFullYear()} - snooperspy
				</Link>
				</Box>
				<Box p={1}>
					<Link href="#" color="inherit">
						Contact
					</Link>
				</Box>
				<Box p={1}>
					<Link href="#" color="inherit">
						Terms of Service
					</Link>
				</Box>
			</Box>
		</Container>
    </div>
  );
}
