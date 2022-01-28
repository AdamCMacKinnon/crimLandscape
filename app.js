const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');
const path = require('path');
require('dotenv').config();
const PORT = 3000;


const VIEWS_PATH = path.join(__dirname,'/views');
app.engine('mustache', mustacheExpress(VIEWS_PATH + '/partials','.mustache'));
app.set('views', VIEWS_PATH);
app.set('view engine','mustache');

app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(express.static('public'));

app.use(require('./routes/index'));
app.use(require('./routes/contact'));

app.get('/', (req,res) => {
  res.render('index')
});

app.listen(PORT,() => {
  console.log(`Server running on ${PORT}`)
});