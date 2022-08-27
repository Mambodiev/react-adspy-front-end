import React, { useState, useEffect } from 'react';
import axiosInstance from '../../axios';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

	root: {
		flexGrow: 1,
		paddingTop: theme.spacing(10),
	  },
	  paper: {
		textAlign: 'center',
		backgroundColor: '#303030',
	  },
}));

export default function Product() {
	const { slug } = useParams();
	const classes = useStyles();

	const [data, setData] = useState({
		products: [],
	});

	useEffect(() => {
		axiosInstance.get('product/' + slug).then((res) => {
			setData({
				products: res.data,
			});
			console.log(res.data);
		});
		// eslint-disable-next-line
	}, [setData]);
	const theme = createTheme({
		typography: {
			subtitle1: {
				fontSize: 18,
				textAlign: "center",
				color: '#fff',
				backgroundColor: '#303030'
			},
			body1: {
				fontWeight: '700',
				textAlign:"center",
			},
		},
	});

	theme.typography.h1 = {
		fontSize: '1.125rem',
		backgroundColor:'#303030',
		color: '#fff',
		fontWeight: '500',
		'@media (min-width:600px)': {
			fontSize: '1.125rem',
		},
		[theme.breakpoints.up('md')]: {
			fontSize: '2rem',
		},
	};
	
	return (
		<Container component="main" maxWidth="lg">		
			    <div className={classes.root}>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<Paper className={classes.paper}>
								<Card
								raised
								elevation={0}
								>
								<CardMedia
									component="img"
									height="100%"
									image={data.products.image}
									alt={data.products.title}
									title={data.products.title}
									sx={{ padding: "1em 1em 0 1em" }}
								/>
								</Card>

							</Paper>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Paper className={classes.paper}  elevation={0}>
								<ThemeProvider theme={theme}>
									<Typography 
										variant="h1"
									>
										<Box textAlign="left" m={1}>
											{data.products.title}{' '}
										</Box>
									</Typography>
									<Grid container spacing={1}>
										<Grid item xs>
										<Paper className={classes.paper}  elevation={0}>
											<Typography variant="subtitle1">Price</Typography>
											<Typography variant="h1">$59.13</Typography>
										</Paper>
										</Grid>
										<Grid item xs>
										<Paper className={classes.paper}  elevation={0}>
											<Typography variant="subtitle1">Cost</Typography>
											<Typography variant="h1">$59.13</Typography>
										</Paper>
										</Grid>
										<Grid item xs>
										<Paper className={classes.paper}  elevation={0}>
											<Typography variant="subtitle1">Profit</Typography>
											<Typography variant="h1">$59.13</Typography>
										</Paper>
										</Grid>
									</Grid>
								</ThemeProvider>
							</Paper>
						</Grid>
					</Grid>
				</div>
		</Container>
	);
}
