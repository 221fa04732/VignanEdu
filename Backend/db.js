
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://mrityunjay:sLVhARIgCxR2sqPO@test-project.evy2o.mongodb.net/VignanEduUsers")

const userSchema = mongoose.Schema({
    name : String,
    email : String,
    password : String
})

const user =mongoose.model('user' ,userSchema)

module.exports={
    userdata : user
}
