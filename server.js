/* eslint-disable */
const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.static(`${__dirname}/dist/`));

app.listen(process.env.PORT || PORT, () => {
    console.log('Server started on http://localhost:3000/ ');
});
