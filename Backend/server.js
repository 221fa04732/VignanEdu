//requires imports
const express = require ('express')
const cors = require('cors')
const app = express();
const chatbot = require('./Routers/chatbot');
const student = require('./Routers/student')
const faculty = require('./Routers/faculty')
const admin = require('./Routers/admin');
const createDisscussion = require('./Routers/create-disscussion')
const addAnswer = require('./Routers/add-answer')
const questionFeedback = require('./Routers/question-feedback')
const answerFeedback = require('./Routers/answer-feedback')
const getDisscussion = require('./Routers/get-disscussion')
const deleteQuestion = require('./Routers/delete-question')
const deleteAnswer = require('./Routers/delete-answer')

require('dotenv').config();
const PORT = process.env.PORT || 5000

// middlewares
app.use(cors())
app.use(express.json())


// all routers
app.use('/chatbot', chatbot.router)
app.use('/student', student.router)
app.use('/faculty', faculty.router)
app.use('/admin', admin.router)
app.use('/create',createDisscussion.router)
app.use('/add',addAnswer.router)
app.use('/question',questionFeedback.router)
app.use('/answer',answerFeedback.router)
app.use('/get',getDisscussion.router)
app.use('/delete',deleteQuestion.router)
app.use('/delete',deleteAnswer.router)


// listining on port
app.listen(PORT , ()=>{
    console.log(`listining on port`)
});