const express = require('express');
const ejsLayouts = require('express-ejs-layouts');
const app = express();

// Tell Express To Use EJS To Display Views
app.set('view engine', 'ejs');
app.use(ejsLayouts);

// Home Page
app.get('/', (req, res) => {
	res.render('index.ejs', {
		name: 'Sterling Archer',
		age: 35,
	});
});

// About Page
app.get('/about', (req, res) => {
	let data = ['LSD', 'House', 'Techno'];
	res.render('about.ejs', {
		favoriteThings: data,
	});
});

// Blog Page
app.get('/blog', (req, res) => {
	res.render('blog-directory.ejs');
});

// Port Listen
app.listen(3000, () => {
	console.log('Now Listenting On Port 3000');
});
