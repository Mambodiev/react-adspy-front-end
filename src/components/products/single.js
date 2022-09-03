import React, { useState, useEffect } from 'react';
import axiosInstance from '../../axios';
import { useParams } from 'react-router-dom';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import TopCustomerCountriesData from './TopCustomerCountriesData/TopCustomerCountriesData';
import LinkIcon from '@material-ui/icons/Link';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import Tooltip from '@material-ui/core/Tooltip';


const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		paddingTop: theme.spacing(12),
		background: '#fff!important',
	},
	paper: {
		paddingBottom: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
	Chip: {
	margin: theme.spacing(0.5),
	
	},
	
	section2: {
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(2),
	},

	price: {
		fontSize: '2rem',
		textAlign: 'center',
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
	},
	topCounries: {
		height: '500px'
	},
	iconLink: {
		marginTop:5,
	},
	dataDetail: {
		boxShadow: 'rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;',
		margin:'5px',
	},
	dataGrid: {
		marginBottom:'20px',
	},
	rootGrid: {
		marginBottom: theme.spacing(2),
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
				textAlign: 'center',
			},
			body1 : {
				fontSize: '1.125rem',
			}
			
		},
	});
	const HtmlTooltip = withStyles((theme) => ({
		tooltip: {
		  backgroundColor: '#f5f5f9',
		  color: 'rgba(0, 0, 0, 0.87)',
		  maxWidth: 220,
		  fontSize: theme.typography.pxToRem(12),
		  border: '1px solid #dadde9',
		},
	  }))(Tooltip);
	theme.typography.h1 = {
		fontSize: '1.225rem',
		fontWeight: '500',
		'@media (min-width:600px)': {
			fontSize: '1.125rem',
		},
		[theme.breakpoints.up('md')]: {
			fontSize: '1.5rem',
		},
	};
	
	return (
		<div className={classes.root}>
			<Container component="main" maxWidth="lg">		
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
						<ThemeProvider theme={theme}>
							<Typography 
								variant="h1"
							>
								<Box textAlign="left" mb={2}>
									{data.products.title}{' '}
								</Box>
							</Typography>
							<div className={classes.rootGrid}>
								<Grid container spacing={1} mb={2}>
									<Grid item xs={4}>
										<Paper className={classes.paper}>
											<Typography variant="subtitle1" >Likes
												<HtmlTooltip
													title={
													<React.Fragment>
														<Typography color="inherit">Tooltip with HTML And here's some amazing contentIt's very engaging. Right?</Typography>
													</React.Fragment>
													}
												>
													<InfoOutlinedIcon fontSize="small"/>
												</HtmlTooltip>
											</Typography>
											<Typography className={classes.price}>5913</Typography>
										</Paper>
									</Grid>
									<Grid item xs={4}>
										<Paper className={classes.paper}>
										<Typography variant="subtitle1" >Order 
											<HtmlTooltip
												title={
												<React.Fragment>
													<Typography color="inherit">Tooltip with HTML And here's some amazing contentIt's very engaging. Right?</Typography>
												</React.Fragment>
												}
											>
												<InfoOutlinedIcon fontSize="small"/>
											</HtmlTooltip>
										</Typography>
										<Typography className={classes.price}>591</Typography>
										</Paper>
									</Grid>
									<Grid item xs={4}>
										<Paper className={classes.paper}>
											<Typography variant="subtitle1" >Stores
												<HtmlTooltip
													title={
													<React.Fragment>
														<Typography color="inherit">Tooltip with HTML And here's some amazing contentIt's very engaging. Right?</Typography>
													</React.Fragment>
													}
												>
													<InfoOutlinedIcon fontSize="small"/>
												</HtmlTooltip>
											</Typography>
											<Typography className={classes.price}>13</Typography>
										</Paper>
									</Grid>
								</Grid>
								<Grid container spacing={1} >
									<Grid item xs={4}>
										<Paper className={classes.paper}>
											<Typography variant="subtitle1">Profit
												<HtmlTooltip
													title={
													<React.Fragment>
														<Typography color="inherit">Tooltip with HTML And here's some amazing contentIt's very engaging. Right?</Typography>
													</React.Fragment>
													}
												>
													<InfoOutlinedIcon fontSize="small"/>
												</HtmlTooltip>
											</Typography>
											<Typography className={classes.price}>$59.13</Typography>
										</Paper>
									</Grid>
									<Grid item xs={4}>
										<Paper className={classes.paper}>
											<Typography variant="subtitle1">Price
												<HtmlTooltip
													title={
													<React.Fragment>
														<Typography color="inherit">Tooltip with HTML And here's some amazing contentIt's very engaging. Right?</Typography>
													</React.Fragment>
													}
												>
													<InfoOutlinedIcon fontSize="small"/>
												</HtmlTooltip>
											</Typography>
											<Typography className={classes.price}>$59.13</Typography>
										</Paper>
									</Grid>
									<Grid item xs={4}>
										<Paper className={classes.paper}>
											<Typography variant="subtitle1">Cost
												<HtmlTooltip
													title={
													<React.Fragment>
														<Typography color="inherit">Tooltip with HTML And here's some amazing contentIt's very engaging. Right?</Typography>
													</React.Fragment>
													}
												>
													<InfoOutlinedIcon fontSize="small"/>
												</HtmlTooltip>
											</Typography>
											<Typography className={classes.price}>$59.13</Typography>
										</Paper>
									</Grid>
								</Grid>
							</div>
						</ThemeProvider>
						<div className={classes.section2}>
							<Typography variant="body1">
								Ads Links
								<HtmlTooltip
									title={
									<React.Fragment>
										<Typography color="inherit">Tooltip with HTML And here's some amazing contentIt's very engaging. Right?</Typography>
									</React.Fragment>
									}
								>
									<InfoOutlinedIcon fontSize="small"/>
								</HtmlTooltip>
							</Typography>	
							<div className={classes.rootx} py={3}  xs={12}>
								<Grid container spacing={1}>
									<Grid item sm={1}>
										<LinkIcon className={classes.iconLink} />
									</Grid>										
									<Grid item sm={11} >
										<Link target="_blank"  href="https://globaltechgoodiesandmore.com/products/petravel-waterproof-dog-car-seat-cover-pet-rear-back-seat-protector" className={classes.Chip} variant="body1"  color="inherit">
											{'globaltechgoodiesandmore.com'.substr(0, 19)}...
										</Link>	
									</Grid>
								</Grid>	
							</div>	
						</div>
						<div className={classes.section2}>
							<Typography variant="body1">
								Store Links										
								<HtmlTooltip
									title={
									<React.Fragment>
										<Typography color="inherit">Tooltip with HTML And here's some amazing contentIt's very engaging. Right?</Typography>
									</React.Fragment>
									}
								>
									<InfoOutlinedIcon fontSize="small"/>
								</HtmlTooltip>
							</Typography>	
							<div className={classes.rootx} py={3}  xs={12}>
								<Grid container spacing={1}>
									<Grid item sm={1}>
										<LinkIcon className={classes.iconLink} />
									</Grid>										
									<Grid item sm={11} >
										<Link target="_blank"  href="https://globaltechgoodiesandmore.com/products/petravel-waterproof-dog-car-seat-cover-pet-rear-back-seat-protector" className={classes.Chip} variant="body1"  color="inherit">
											{'globaltechgoodiesandmore.com'.substr(0, 19)}...
										</Link>	
									</Grid>
								</Grid>	
								<Grid container spacing={1}>
									<Grid item sm={1}>
										<LinkIcon className={classes.iconLink} />
									</Grid>										
									<Grid item sm={11} >
										<Link target="_blank"  href="https://globaltechgoodiesandmore.com/products/petravel-waterproof-dog-car-seat-cover-pet-rear-back-seat-protector" className={classes.Chip} variant="body1"  color="inherit">
											{'globaltechgoodiesandmore.com'.substr(0, 19)}...
										</Link>	
									</Grid>
								</Grid>	
								<Grid container spacing={1}>
									<Grid item sm={1}>
										<LinkIcon className={classes.iconLink} />
									</Grid>										
									<Grid item sm={11} >
										<Link target="_blank"  href="https://globaltechgoodiesandmore.com/products/petravel-waterproof-dog-car-seat-cover-pet-rear-back-seat-protector" className={classes.Chip} variant="body1"  color="inherit">
											{'globaltechgoodiesandmore.com'.substr(0, 19)}...
										</Link>	
									</Grid>
								</Grid>	
							</div>	
						</div>
						<Typography variant="body1">
								Demographies
							</Typography>
						<Box display="flex" justifyContent="center">
							<Box>	
								<TopCustomerCountriesData />
							</Box>
						</Box>
					</Grid>
				</Grid>				
			</Container>
		</div>
	);
}
