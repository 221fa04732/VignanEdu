const express = require("express");
const app = express();
const port = 9000;
const { chatbot } = require('./chatbotdb.js');
app.use(express.json());

const cors = require('cors');
app.use(cors());


app.post('/chatBot',async (req,res)=>{
    const {question}=req.body;

    let questionFound=await chatbot.findOne({question:question});
    if(questionFound){
        return res.status(200).json({questionFound});
    }

    questionFound={
        question : question,
        ans: "don't know"
    }
    return res.status(200).json({questionFound});
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });