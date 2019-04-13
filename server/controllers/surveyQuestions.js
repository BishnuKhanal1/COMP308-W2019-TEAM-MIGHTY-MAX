let express = require('express');
let router = express.Router();
let jwt = require('jsonwebtoken');

// create a reference to the db schema
let questionModel = require('../models/surveyQuestions');

module.exports.displaySurveyQuestions = (req, res, next) =>{
    questionModel.find((err, surveyQuestions) => {
        if(err) {
            return console.error(err);
        }
        else {
           res.json({success: true, msg: 'Survey List Displayed Successfully', surveyQuestions: surveyQuestions, user: req.user});
        }
    });
}

module.exports.displayAddPage = (req, res, next) => {
    res.json({success: true, msg: 'Successfully Displayed Add Page'});
}

module.exports.processAddPage = (req, res, next) => {

    let newSurvey = questionModel({
        "title":req.body.title,
        "type":req.body.type,
        "question1": req.body.question1,
        "question2": req.body.question2,
        "question3": req.body.question3,
        "question4": req.body.question4,
        "question5": req.body.question5,
        "question6": req.body.question6
    });

    questionModel.create(newSurvey, (err, questionModel) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.json({success: true, msg: 'Successfully Added New Survey'});
        }
    });
}
