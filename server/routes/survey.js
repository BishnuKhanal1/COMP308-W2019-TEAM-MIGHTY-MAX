let express = require('express');
let router = express.Router();

let jwt = require('jsonwebtoken');

let passport = require('passport');

let surveyController = require('../controllers/survey');

/* GET Surveys page - READ Operation */
router.get('/', /*passport.authenticate('jwt', {session: false}),*/ surveyController.displaySurveys);

/* GET Route for the Survey page 
   this will display the Survey page */
router.get('/survey/:id', /*passport.authenticate('jwt', {session: false}),*/ surveyController.displaySurveyPage);

/* POST Route for processing the Survey page */
router.post('/survey/:id', /*passport.authenticate('jwt', {session: false}),*/ surveyController.processSurveyPage);

// /* GET request - display the Edit page */
// router.get('/edit/:id', passport.authenticate('jwt', {session: false}), surveyController.displayEditPage);

// /* POST request - Update the database with data from the Edit Page */
// router.post('/edit/:id', passport.authenticate('jwt', {session: false}), surveyController.processEditPage);

// /* GET request to perform the delete action */
// router.get('/delete/:id', passport.authenticate('jwt', {session: false}), surveyController.performDelete);

module.exports = router;
