let mongoose = require('mongoose');

// create a model class
let questionSchema = mongoose.Schema({
    title: String,
    type: String,
    question1: String,
    question2: String,
    question3: String,
    question4: String,
    question5: String,
    question6: String
},
{
    collection: "surveyQuestions"
});

module.exports = mongoose.model('surveyQuestions', questionSchema);