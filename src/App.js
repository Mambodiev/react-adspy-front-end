import React, { useEffect, useState } from 'react';
import './App.css';
import Products from './components/products/products';
import ProductLoadingComponent from './components/products/productLoading';
import axiosInstance from './axios';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({

	App : {
	  background: '#fff',
	  shadows: ["none"],
	  color:"inherit"
	},
  }));

function App() {
	const classes = useStyles();
	const ProductLoading = ProductLoadingComponent(Products);
	const [appState, setAppState] = useState({
		loading: true,
		products: null,
	});

	useEffect(() => {
		axiosInstance.get().then((res) => {
			const allProducts = res.data;
			console.log(res.data);
			setAppState({ loading: false, products: allProducts });
			console.log(res.data);
		});
	}, [setAppState]);
	return (
		<div className={classes.App}>
			
			<ProductLoading isLoading={appState.loading} products={appState.products} />
		</div>
	);
}
export default App;
