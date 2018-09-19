const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('This is the backend in node-express of my web application'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));