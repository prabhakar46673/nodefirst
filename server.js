const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname+'/views/partials');

//Middleware
app.use((req, res, next)=>{
  console.log(new Date().toString());
  console.log(req);
  next();
});


hbs.registerHelper('getCurrentYear', ()=>{
  return new Date().getFullYear();
});



app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  // res.send('<h1>Hello Express!</h1>');
  res.send({
    name: 'Andrew',
    likes: [
      'Biking',
      'Cities'
    ]
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs',{pageTitle: 'About Jack Page', currentYear: new Date().getFullYear()});
});

// /bad - send back json with errorMessage
app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to handle request'
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
