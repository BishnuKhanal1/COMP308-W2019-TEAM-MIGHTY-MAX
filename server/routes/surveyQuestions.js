let express = require('express');
let router = express.Router();

let jwt = require('jsonwebtoken');

let passport = require('passport');

let surveyQuestionsController = require('../controllers/surveyQuestions');

function requireAuth(req, res, next) {
    // check if the user is logged in
    if(!req.isAuthenticated()) {
        return res.redirect('/login');
    }
    next();
}

/* GET Survey List page - READ Operation */
    router.get('/', passport.authenticate('jwt', {session: false}), surveyQuestionsController.displaySurveyQuestions);

/* GET Route for the Add page 
   this will display the Add page */
   router.get('/add', passport.authenticate('jwt', {session: false}), surveyQuestionsController.displayAddPage);

   /* POST Route for processing the Add page */
   router.post('/add', passport.authenticate('jwt', {session: false}), surveyQuestionsController.processAddPage);

   module.exports = router;