import React, { useState, useEffect } from 'react';
import axiosInstance from '../../axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ShareIcon from '@material-ui/icons/Share';
import LocationOnIcon from '@material-ui/icons/LocationOn';



const useStyles = makeStyles((theme) => ({
	bgroot: {
		flexGrow: 1,
		paddingTop: theme.spacing(12),
		background: '#fff!important',
	},

	cardContent: {
		padding:0,
	},

	cardMedia: {
		paddingTop: '100%', 
		height: '100%',	
	},
	link: {
		margin: theme.spacing(1, 1.5),	
	},
	productTitle: {
		fontSize: '16px',
		textAlign: 'left!important',
	},
	adsLogo: {
		padding: '16px', 
		height: '100%',
	},
	productText: {
		display: 'flex',
		justifyContent: 'left',
		alignItems: 'baseline',
		fontSize: '12px',
		textAlign: 'left',
		marginBottom: theme.spacing(2),
		marginTop: theme.spacing(1),
	},
	root: {
		flexGrow: 1,
		marginTop: '10px',
	  },
	paper: {
		paddingRight: theme.spacing(1),
	},
}));

const Search = () => {
	const classes = useStyles();
	const search = 'search';
	const [appState, setAppState] = useState({
		search: '',
		products: [],
	});

	useEffect(() => {
		axiosInstance.get(search + '/' + window.location.search).then((res) => {
			const allProducts = res.data;
			setAppState({ products: allProducts });
			console.log(res.data);
		});
	}, [setAppState]);
	const theme = createTheme({
		typography: {
			subtitle1: {
				fontSize: 18,
			},
			body1: {
				fontWeight: '700',
			},
		},
	});

	theme.typography.h1 = {
		fontSize: '1.125rem',
		fontWeight: '500',
		'@media (min-width:600px)': {
			fontSize: '1.125rem',
		},
		[theme.breakpoints.up('md')]: {
			fontSize: '1.5rem',
		},
	};
	return (
		<div className={classes.bgroot}>
			<Container maxWidth="lg" component="main">
				<Typography variant="h5" gutterBottom>
					Search Result
				</Typography>
				<Grid container spacing={3} alignItems="flex-end">
					{appState.products.map((product) => {
						return (
							<Grid item key={product.id}  xs={12} sm={6} md={4}>
								<Card className={classes.card} elevation={0}>
									<Link
										color="textPrimary"
										href={'/product/' + product.slug}
										className={classes.link}
									>
									<CardMedia
										className={classes.cardMedia}
										image={product.image}
										title="Image title"
									/>
									</Link>
									<CardContent className={classes.cardContent}>
										<ThemeProvider theme={theme}>
												<div className={classes.root}>
													<Grid container spacing={3}>
														<Grid item sm={1}>
															<Paper className={classes.paper}> 
																<CardMedia
																	className={classes.adsLogo}
																	image={product.image}
																	title="Image title"
																/>
															</Paper>
														</Grid>
														<Grid item sm={1} >
															<Paper className={classes.paper}>
															<CardMedia
																className={classes.adsLogo}
																image={product.image}
																title="Image title"
															/>
															</Paper>
														</Grid>
														<Grid item sm={10}>
															<Typography 
															variant="h1"
															>
																<Box textAlign="left">
																	{product.title.substring(0, 18)}...
																</Box>
															</Typography>
														</Grid>
													</Grid>
												</div>
										</ThemeProvider>
										<div className={classes.productText}>											
											<div className={classes.root}>
												<Grid container spacing={1}>
													<Grid item xs={4}>
														<Paper className={classes.paper} elevation={0}>
															<ThemeProvider theme={theme}>
																<ThumbUpAltIcon />
																<Typography>99</Typography>
															</ThemeProvider>
														</Paper>
													</Grid>
													<Grid item xs={4}>
													<Paper className={classes.paper} elevation={0}>
														<ThemeProvider theme={theme}>
															<ShareIcon />
															<Typography>59</Typography>
														</ThemeProvider>
													</Paper>
													</Grid>
													<Grid item xs={4}>
													<Paper className={classes.paper} elevation={0}>
														<ThemeProvider theme={theme}>
															<LocationOnIcon />
															<Typography>USA</Typography>
														</ThemeProvider>
													</Paper>
													</Grid>
												</Grid>
											</div>
										</div>
									</CardContent>
								</Card>
							</Grid>
						);
					})}
				</Grid>
			</Container>
		</div>
	);
};
export default Search;
