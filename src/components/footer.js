
import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	divider: {
		margin: 0,
	 	marginTop: theme.spacing(8),
	  	marginBottom: theme.spacing(8),
	},
  }));

export default function FlexGrow() {
  const classes = useStyles();
  return (
		
    <div style={{ width: '100%' }}>
		<Container component="main" maxWidth="lg">
			<Divider variant="middle" className={classes.divider} />
			<Box display="flex" p={1} >
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
