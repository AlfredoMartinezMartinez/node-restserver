const express = require('express');
const app = express();

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

module.exports = {
    app
}