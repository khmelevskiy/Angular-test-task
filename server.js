"use strict";
const express = require('express');
const app = express();

//app.use(require('express').static(__dirname + '/app'));
app.use(express.static(__dirname + '/app'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(3000, () => {
  console.log('app listening on port 3000!');
});


