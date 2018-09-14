require('./config/config');

const express = require('express');
const app = express();

// const bodyParser = require('body-parser');

// // parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// // parse application/json
app.use(express.json());

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// app.get('/', function(req, res) {
//     // res.send('Hello World');
//     res.json('hello World');
// });

app.get('/usuario', function(req, res) {
    // res.send('Hello World');
    res.json('get Usuario');
});

app.post('/usuario', function(req, res) {
    // res.send('Hello World');
    let body = req.body;
    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'el nombre es necesario'
        });

    } else {
        res.json({ persona: body });
    }
});

app.put('/usuario/:id', function(req, res) {
    // res.send('Hello World');
    let id = req.params.id;
    res.json({
        id
    });
});

app.delete('/usuario', function(req, res) {
    // res.send('Hello World');
    res.json('delete Usuario');
});
app.listen(process.env.PORT, () => {
    console.log('escuchando puerto 3000');
});