const path = require('path');
const express = require('express');

const app = express();

app.use('/', express.static(path.join(__dirname, 'side-quest/discord-login/public')));

app.get('/home', (request, response) => {
    return response.sendFile('side-quest/discord-login/home.html', { root: '.'});
});

app.get('/', (request, response) => {
    return response.sendFile('side-quest/discord-login/index.html', { root: '.'});
});

const port = '3000'
app.listen(port, () => console.log(`App listeniong at localhost:${port}`));