const express = require('express');

const app = express();
const fetch = require('node-fetch');

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
});

app.get('*', async (req, res) => {
    const url = 'https://cryptopanic.com' + req.url.toString();
    const response = await fetch(url);

    const json = await response.json();

    return res.status(response.status).json(json);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
