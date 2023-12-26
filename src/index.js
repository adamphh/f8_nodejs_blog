const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const app = express();
const port = 3000;
const path = require('path');

// Static content 
app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// HTTP logger
// app.use(morgan('combined'));

// Template engine
app.engine('hbs', engine({
    extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

/** route */
app.get('/', (req, res) => {
    res.render('home', { layout: 'home' });
})
app.get('/home', (req, res) => {
    res.send('home page')
})

app.get('/news', (req, res) => {
    res.render('news')
})

app.get('/search', (req, res) => {
    res.render('search')
})

app.get('/result', (req, res) => {
    console.log(req.query.keyword)
    res.render('result', { data: req.query.keyword })
});

app.post('/search', (req, res) => {
    console.log(req.body);
    res.send('search')
    // res.render('search') 
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})