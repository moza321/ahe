const express = require('express');
const app = express();
const port =3002;
// set the view engine to ejs
app.set('view engine', 'ejs');
// viiew folder public
app.use(express.static('public'));


app.get('/', function (req, res) {
  res.render('index')
})

app.listen(port , ()=>{console.log(`berjalan di port ${port}`)});