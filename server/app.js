const express = require('express');
const path = require('path');

const app = express();


app.set('port', process.env.PORT || 3000)
  .disable('x-powered-by')
  .use(express.static(path.join(__dirname, '..', 'public')))
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use(express.static(path.join(__dirname, '..', 'client', 'build')))
  .get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
  });

module.exports = app;

