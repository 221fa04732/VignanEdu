const express = require("express");
const router = express.Router();
const { disscussion } = require('./databases.js');
router.use(express.json());

const cors = require('cors');
router.use(cors());

router.post('/disscussion', async (req, res) => {    

    const question = req.body.question
    try
    {
        const newdisscussion =new disscussion({
            question: question,
            like: 0,
            dislike : 0,
            upvote: 0,
            downvote: 0,
            answers : []
        })
    
        await newdisscussion.save()

        res.status(200).json({
            msg : "disscussion saved"
        })
    }
    catch (error)
    {
        res.status(400).json({
            msg : "An error occured"
        })
    }


})


module.exports ={
  router
}
