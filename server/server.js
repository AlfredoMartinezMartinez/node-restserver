require('./config/config');

const express = require('express');
// const mongoose = require('mongoose');

const app = express();


// const bodyParser = require('body-parser');

// // parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// // parse application/json
app.use(express.json());

app.use(require('./routes/usuario'));

// mongoose.connect('mongodb://localhost:27017/cafe', (err, res) => {

//     if (err) throw err;
//     console.log(('Base de datos ONLINE'));
// });

app.listen(process.env.PORT, () => {
    console.log('escuchando puerto', process.env.PORT);
});