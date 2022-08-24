import React, { useEffect, useState } from 'react';
import './App.css';
import Products from './components/products/products';
import ProductLoadingComponent from './components/products/productLoading';
import axiosInstance from './axios';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';


function App() {
	const ProductLoading = ProductLoadingComponent(Products);
	const [appState, setAppState] = useState({
		loading: true,
		products: null,
	});
	const theme = createTheme({
		typography: {
		  fontFamily: [
			'Lato',
			'Open Sans',
			'sans-serif'
		  ].join(','),
		}
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
		<ThemeProvider theme={theme}>
			<div className="App">
				<h1>Latest Products</h1>
				<ProductLoading isLoading={appState.loading} products={appState.products} />
			</div>
		</ThemeProvider>
	);
}
export default App;
