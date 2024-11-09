//requires imports
const express = require ('express')
const cors = require('cors')
const app = express();
const chatbot = require('./Routers/chatbot');
const student = require('./Routers/student')
const faculty = require('./Routers/faculty')
const admin = require('./Routers/admin')

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


// listining on port
app.listen(PORT , ()=>{
    console.log(`listining on port`)
});