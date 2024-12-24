const express = require("express");
const router = express.Router();
const { disscussion } = require('./databases.js');
router.use(express.json());

const cors = require('cors');
router.use(cors());

router.put('/feedback', async (req, res) =>{

    const question_id = req.body.question_id;
    const feedback = req.body.feedback

    const find_disscussion = await disscussion.findOne({_id : question_id});

    try{
        if(feedback === 0)
            {
                await disscussion.updateOne(
                    {_id : question_id},
                    { $set : {like : (find_disscussion.like)+1} }
                )
        
                res.status(200).json({
                    msg : "question like updated"
                })
            }

            else if( feedback === 1){
                await disscussion.updateOne(
                    {_id : question_id},
                    { $set : {dislike : (find_disscussion.dislike)+1} }
                )
        
                res.status(200).json({
                    msg : "question dislike updated"
                })
            }

            else if( feedback === 2){
                await disscussion.updateOne(
                    {_id : question_id},
                    { $set : {upvote : (find_disscussion.upvote)+1} }
                )
        
                res.status(200).json({
                    msg : "question upvote updated"
                })
            }

            else if( feedback === 3){
                await disscussion.updateOne(
                    {_id : question_id},
                    { $set : {downvote : (find_disscussion.downvote)+1} }
                )
        
                res.status(200).json({
                    msg : "question downvote updated"
                })
            }
    }

    catch(error)
    {
        res.status(400).json({
            msg : "error occured"
        })
    }
    
})


module.exports ={
  router
}
