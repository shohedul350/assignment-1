const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());

// custommiddleware
app.use(require('./customMiddleware'));

//  set view wngine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// routes
app.get('/', (req, res) => {
  res.render('index');
});


app.use('/api/users', require('./routes/user'));
app.use('/api/user/journey', require('./routes/journey'));


app.listen(PORT, () => { console.log(`The app is running on port ${PORT}`); });
