"use strict";

const express = require('express');
const path = require('path');
const app = express();

const staticDir = path.join(__dirname, 'app');
app.use('/', express.static(staticDir));

app.listen(3000, () => {
  console.log('app listening on port 3000!');
});


