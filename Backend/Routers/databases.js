const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://mrityunjay:sLVhARIgCxR2sqPO@test-project.evy2o.mongodb.net/VignanEdu")



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



const studentdb =mongoose.model('studentdb' ,studentSchema)
const facultydb =mongoose.model('facultydb' ,facultySchema)
const admindb =mongoose.model('admindb' , AdminSchema)



module.exports={
    studentdb : studentdb,
    facultydb : facultydb,
    admindb : admindb
}
