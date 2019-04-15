let mongoose = require('mongoose');

let surveyAnswersSchema = mongoose.Schema({
    answer1: String,
    answer2: String,
    answer3: String,
    answer4: String,
    answer5: String,
    answer6: String
},
{
    collection: "surveyAnswers"
});

module.exports = mongoose.model('surveyAnswers', surveyAnswersSchema);
