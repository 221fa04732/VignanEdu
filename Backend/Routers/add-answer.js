const express = require("express");
const router = express.Router();
const { disscussion } = require('./databases.js');
router.use(express.json());

const cors = require('cors');
router.use(cors());

router.put('/answers', async (req, res)=>{

    const question_id = req.body.question_id;

    const answers = {
        answer : req.body.answer,
        like: 0,
        dislike : 0,
        upvote: 0,
        downvote: 0,
    }

    try
    {
        const updateAnswer = await disscussion.updateOne(
            {_id : question_id},
            {$push : {answers : answers}}
        )

        res.status(200).json({
            msg : "answer added"
        })
    }
    catch(error)
    {
        res.status(400).json({
            msg : "an error occured"
        })
    }

})


module.exports ={
  router
}
