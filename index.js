const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
    res.send('hiiiiiiii')
})

app.listen(port, () => {
    console.log('its working babes')
})