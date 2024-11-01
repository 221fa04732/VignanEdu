//requires imports
const express = require ('express')
const cors = require('cors')
const app = express();
const port = 3000;
const chatbot = require('./Routers/chatbot');
const student = require('./Routers/student')
const faculty = require('./Routers/faculty')
const admin = require('./Routers/admin')


// middlewares
app.use(cors())
app.use(express.json())


// all routers
app.use('/chatbot', chatbot.router)
app.use('/student', student.router)
app.use('/faculty', faculty.router)
app.use('/admin', admin.router)


// listining on port
app.listen(port , ()=>{
    console.log(`listining on ${port} port`)
});