const express = require('express');
const session = require('express-session');
const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');
app.use('/static', express.static(__dirname + '/static'));
app.use(
  session({
    secret: 'MySessionSecretKey', // 암호화 키
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      maxAge: 60 * 1000, // 1m
    },
  })
);

app.get('/', (req, res) => {
  res.render('sessionHome');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
