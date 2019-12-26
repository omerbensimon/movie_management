const express = require('express');
const app = express();
const connection = require('./db_connection').connection;

const PORT = process.env.PORT || 8080;
const movieRouter = require('./movieRouter');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('', movieRouter);
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
app.listen(PORT, () => console.log('Express server is running on port ', PORT));