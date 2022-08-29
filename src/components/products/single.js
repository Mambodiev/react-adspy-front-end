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
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';
import TopCustomerCountriesData from './TopCustomerCountriesData/TopCustomerCountriesData';

const useStyles = makeStyles((theme) => ({

	root: {
		flexGrow: 1,
		paddingTop: theme.spacing(10),
	  },
	  paper: {
		textAlign: 'center',
		backgroundColor: '#303030',
	  },
	  Chip: {
		margin: theme.spacing(0.5),
		
	  },
	  
	  section2: {
		marginTop: theme.spacing(2),
	  },

	  price: {
		backgroundColor: '#262626',
		color: '#fff',
		fontSize: '2rem',
		[theme.breakpoints.down('xs')]: {
			fontSize: '1.225rem',
		  },
	  },
	  adsLogo: {
		paddingTop: '4px', 
		height: '100%',
		width: '100%'
	},
	divider: {
		margin: '12px 0 12px 0'
	},
	rootx: {
		marginLeft:'12px',
	}
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
				backgroundColor: '#262626'
			},
			body1: {
				fontWeight: '700',
				textAlign:"center",
			},
		},
	});

	theme.typography.h1 = {
		fontSize: '1.225rem',
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
										<Box textAlign="left" mb={2}>
											{data.products.title}{' '}
										</Box>
									</Typography>
									<Grid container spacing={1}>
										<Grid item xs>
											<Paper className={classes.paper}  >
												<Typography variant="subtitle1">Price</Typography>
												<Typography className={classes.price}>$59.13</Typography>
											</Paper>
										</Grid>
										<Grid item xs>
											<Paper className={classes.paper}  elevation={3}>
												<Typography variant="subtitle1">Cost</Typography>
												<Typography className={classes.price}>$59.13</Typography>
											</Paper>
										</Grid>
										<Grid item xs>
											<Paper className={classes.paper}  elevation={3}>
												<Typography variant="subtitle1">Profit</Typography>
												<Typography className={classes.price}>$59.13</Typography>
											</Paper>
										</Grid>
									</Grid>
								</ThemeProvider>
							</Paper>
							<div className={classes.section2}>
								<Typography variant="h4">
								Stores and Ads Found
								</Typography>	
								<div className={classes.rootx} py={3}>
									<Grid container spacing={1}>
										<Grid item sm={1}>
											<Paper className={classes.paper}> 												
													<CardMedia
														className={classes.adsLogo}
														image={data.products.image}
														title="Image title"
														component="img"
														height="100%"
													/>
											</Paper>
										</Grid>										
										<Grid item sm={11} >
											<Link target="_blank"  href="https://globaltechgoodiesandmore.com/products/petravel-waterproof-dog-car-seat-cover-pet-rear-back-seat-protector" className={classes.Chip} variant="h6"  color="inherit">
												{'globaltechgoodiesandmore.com'.substr(0, 19)}...
											</Link>	
										</Grid>
									</Grid>	
								</div>	
								<div className={classes.rootx} py={3}>
									<Grid container spacing={1}>
										<Grid item sm={1}>
											<Paper className={classes.paper}> 												
													<CardMedia
														className={classes.adsLogo}
														image={data.products.image}
														title="Image title"
														component="img"
														height="100%"
													/>
											</Paper>
										</Grid>										
										<Grid item sm={11}>
											<Link target="_blank"  href="https://globaltechgoodiesandmore.com/products/petravel-waterproof-dog-car-seat-cover-pet-rear-back-seat-protector" className={classes.Chip} variant="h6"  color="inherit">
												{'globaltechgoodiesandmore.com'.substr(0, 19)}...
											</Link>	
										</Grid>
									</Grid>	
								</div>					
							</div>
							<Divider variant="middle" className={classes.divider}/>
							<TopCustomerCountriesData />
						</Grid>
					</Grid>
				</div>
				
		</Container>
	);
}
