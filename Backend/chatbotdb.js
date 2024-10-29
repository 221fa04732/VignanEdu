const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://mrityunjay:sLVhARIgCxR2sqPO@test-project.evy2o.mongodb.net/VignanEduChatbot")

const chatSchema = mongoose.Schema({
    question : String,
    ans : String,
})

const chatbot =mongoose.model('chatbot' ,chatSchema)

module.exports={
    chatbot : chatbot
}