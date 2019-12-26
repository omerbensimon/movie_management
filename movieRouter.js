const router = require('express').Router();
const RatingHandler = require('./movieController');

router.post('/addMovie', (req, res) => {
    RatingHandler.addMovie(req, res)
});
router.put('/updateMovieRating/:id', (req, res) => {
    RatingHandler.updateMovieRating(req, res)
});
router.get('/viewAllMovies', (req, res) => {
    RatingHandler.viewAllMovies(req, res)
});
router.post('/addReview/:id', (req, res) => {
    RatingHandler.addReview(req, res)
});
router.get('/viewSingleMovie/:id', (req, res) => {
    RatingHandler.viewSingleMovie(req, res)
});
router.delete('/deleteMovie/:id', (req, res) => {
    RatingHandler.deleteMovie(req, res)
});

router.all('*', (req, res) => {
    res.status(err.status).send('The rout isnt avileble..')
})
module.exports = router;