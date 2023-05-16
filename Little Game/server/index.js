const express = require('express');
const mongoose = require('mongoose');

const router = require('./router');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(router);

mongoose.connect('mongodb://127.0.0.1:27017/littleGame');

app.listen(3030, () => console.log('Server is online and is running on port 3030...'));