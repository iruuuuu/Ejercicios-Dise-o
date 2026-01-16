// backend/index.js
const express = require('express');
const app = express();
const port = 5000;
app.get('/api/saludo', (req, res) => {
    res.json({ mensaje: '¡Hola desde el backend!' });
});
app.listen(port, () => console.log(`Backend escuchando en ${port}`));