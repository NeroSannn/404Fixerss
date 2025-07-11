const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index'); // landing page
});

app.get('/home', (req, res) => {
  res.render('home'); // main website
});

app.listen(PORT, () => {
  console.log(`404Fixers is running at http://localhost:${PORT}`);
});
