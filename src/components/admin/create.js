import React, { useState } from 'react';
import axiosInstance from '../../axios';
import { useHistory } from 'react-router-dom';
//MaterialUI
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import IconButton from '@material-ui/core/IconButton';
// import PhotoCamera from '@material-ui/icons/PhotoCamera';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

export default function Create() {
	//https://gist.github.com/hagemann/382adfc57adbd5af078dc93feef01fe1
	function slugify(string) {
		const a =
			'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;';
		const b =
			'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------';
		const p = new RegExp(a.split('').join('|'), 'g');

		return string
			.toString()
			.toLowerCase()
			.replace(/\s+/g, '-') // Replace spaces with -
			.replace(p, (c) => b.charAt(a.indexOf(c))) // Replace special characters
			.replace(/&/g, '-and-') // Replace & with 'and'
			/* eslint-disable no-useless-escape */
			.replace(/[^\w\-]+/g, '') // Remove all non-word characters
			.replace(/\-\-+/g, '-') // Replace multiple - with single -
			.replace(/^-+/, '') // Trim - from start of text
			.replace(/-+$/, ''); // Trim - from end of text
	}
	//

	const history = useHistory();
	const initialFormData = Object.freeze({
		title: '',
		slug: '',
		excerpt: '',
		content: '',
	});

	const [productData, updateFormData] = useState(initialFormData);
	const [productimage, setProductImage] = useState(null);

	const handleChange = (e) => {
		if ([e.target.name] === 'image') {
			setProductImage({
				image: e.target.files,
			});
			console.log(e.target.files);
		}
		if ([e.target.name] === 'title') {
			updateFormData({
				...productData,
				[e.target.name]: e.target.value.trim(),
				'slug': slugify(e.target.value.trim()),
			});
		} else {
			updateFormData({
				...productData,
				[e.target.name]: e.target.value.trim(),
			});
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		let formData = new FormData();
		formData.append('title', productData.title);
		formData.append('slug', productData.slug);
		formData.append('author', 1);
		formData.append('excerpt', productData.excerpt);
		formData.append('content', productData.content);
		formData.append('image', productimage.image[0]);
		axiosInstance.product(`admin/create/`, formData);
		history.push({
			pathname: '/admin/',
		});
		window.location.reload();
	};

	// const config = { headers: { 'Content-Type': 'multipart/form-data' } };
	// const URL = 'http://127.0.0.1:8000/api/admin/creats/';
	// let formData = new FormData();
	// formData.append('title', productData.title);
	// formData.append('slug', productData.slug);
	// formData.append('author', 1);
	// formData.append('excerpt', productData.excerpt);
	// formData.append('content', productData.content);
	// formData.append('image', productimage.image[0]);
	// axios
	// 	.product(URL, formData, config)
	// 	.then((res) => {
	// 		console.log(res.data);
	// 	})
	// 	.catch((err) => console.log(err));

	const classes = useStyles();

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}></Avatar>
				<Typography component="h1" variant="h5">
					Create New Product
				</Typography>
				<form className={classes.form} noValidate>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="title"
								label="Product Title"
								name="title"
								autoComplete="title"
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="excerpt"
								label="Product Excerpt"
								name="excerpt"
								autoComplete="excerpt"
								onChange={handleChange}
								multiline
								rows={4}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="slug"
								label="slug"
								name="slug"
								autoComplete="slug"
								value={productData.slug}
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="content"
								label="content"
								name="content"
								autoComplete="content"
								onChange={handleChange}
								multiline
								rows={4}
							/>
						</Grid>
						<input
							accept="image/*"
							className={classes.input}
							id="product-image"
							onChange={handleChange}
							name="image"
							type="file"
						/>
					</Grid>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
						onClick={handleSubmit}
					>
						Create Product
					</Button>
				</form>
			</div>
		</Container>
	);
}
