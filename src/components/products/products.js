import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
	// card: {
	// 	margin: 'auto',
	// 	display: 'block',
	// 	maxWidth: '100%',
	// 	maxHeight: '100%',
	// 	},

	cardMedia: {
		paddingTop: '56.25%', // 16:9	
		height: '170px',	
	},
	link: {
		margin: theme.spacing(1, 1.5),
	},
	cardHeader: {
		backgroundColor:
			theme.palette.type === 'light'
				? theme.palette.grey[200]
				: theme.palette.grey[700],
	},
	productTitle: {
		fontSize: '16px',
		textAlign: 'left!important',
	},
	productText: {
		display: 'flex',
		justifyContent: 'left',
		alignItems: 'baseline',
		fontSize: '12px',
		textAlign: 'left',
		marginBottom: theme.spacing(2),
	},
}));

const Products = (props) => {
	const { products } = props;
	const classes = useStyles();

	const theme = createTheme();

	theme.typography.h1 = {
		fontSize: '1.125rem',
		fontWeight: '300',
		'@media (min-width:600px)': {
		  fontSize: '1.125rem',
		},
		[theme.breakpoints.up('md')]: {
		  fontSize: '1.5rem',
		},
	  };

	if (!products || products.length === 0) return <p>Can not find any products, sorry</p>;
	return (
		<React.Fragment>
			<Container maxWidth="lg" component="main">
				<Grid container spacing={3}>
					{products.map((product) => {
						return (
								<Grid item key={product.id} xs={12} sm={6} md={4} >
									<Card className={classes.card}>
										<Link
											color="textPrimary"
											href={'product/' + product.slug}
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
												<Typography 
													variant="h1"
													textalign="left"
												>
													<Box textAlign="left" m={1}>
														{product.title.substr(0, 40)}...
													</Box>
												</Typography>
											</ThemeProvider>
											<div className={classes.productText}>
												<Typography color="textSecondary">
													{/* {product.excerpt.substr(0, 40)}... */}
												</Typography>
											</div>
										</CardContent>
									</Card>
								</Grid>
						);
					})}
				</Grid>
			</Container>
		</React.Fragment>
	);
};
export default Products;


// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
// }));

// export default function CenteredGrid() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <Grid container spacing={3}>
//         <Grid item xs={12} sm={6} md={4} lg={3}>
//           <Paper className={classes.paper}>xs=3</Paper>
//         </Grid>
//         <Grid item xs={12} sm={6} md={4} lg={3}>
//           <Paper className={classes.paper}>xs=3</Paper>
//         </Grid>
//         <Grid item xs={12} sm={6} md={4} lg={3}>
//           <Paper className={classes.paper}>xs=3</Paper>
//         </Grid>
//         <Grid item xs={12} sm={6} md={4} lg={3}>
//           <Paper className={classes.paper}>xs=3</Paper>
//         </Grid>
//       </Grid>
//     </div>
//   );
// }