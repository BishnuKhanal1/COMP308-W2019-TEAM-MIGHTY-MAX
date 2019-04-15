let mongoose = require('mongoose');

let surveySchema = mongoose.Schema({
    title: String,
    typeOfSurvey: String,
    question1: String,
    question2: String,
    question3: String,
    question4: String,
    question5: String,
    question6: String,
    peopleTaken: Number
},
{
    collection: "surveys"
});

module.exports = mongoose.model('survey', surveySchema);
