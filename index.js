const path = require('path');
const express = require('express');

const app = express();

const root = path.join(__dirname, '..'); // discord-login
app.use(express.static(root));

app.get('/', (req, res) => res.sendFile(path.join(root, 'index.html')));
app.get('/home.html', (req, res) => res.sendFile(path.join(root, 'home.html')));

// logs d'erreur simples
process.on('uncaughtException', (err) => console.error('uncaughtException', err));
process.on('unhandledRejection', (err) => console.error('unhandledRejection', err));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App listening at http://localhost:${port}`));