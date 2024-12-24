require('dotenv').config();
const URL = process.env.URL

const mongoose = require("mongoose")
mongoose.connect(URL)


const studentSchema = mongoose.Schema({
    name : String,
    email : String,
    password : String
})

const facultySchema = mongoose.Schema({
    email : String,
    password : String,
    empid : String
})

const AdminSchema = mongoose.Schema({
    email : String,
    password : String,
    secrete : String,
    otp : String
})

const chatSchema = mongoose.Schema({
    question : String,
    ans : String,
})

const answerSchema = new mongoose.Schema({
    answer : String,
    like: Number,
    dislike : Number,
    upvote: Number,
    downvote: Number
})

const questionSchema = new mongoose.Schema({
    question: String,
    like: Number,
    dislike : Number,
    upvote: Number,
    downvote: Number,
    answers: [answerSchema]
})



const studentdb =mongoose.model('studentdb' ,studentSchema)
const facultydb =mongoose.model('facultydb' ,facultySchema)
const admindb =mongoose.model('admindb' , AdminSchema)
const disscussion = mongoose.model('disscussion', questionSchema)



module.exports={
    studentdb : studentdb,
    facultydb : facultydb,
    admindb : admindb,
    disscussion : disscussion,
}
