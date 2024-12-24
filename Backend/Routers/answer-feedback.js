const express = require("express");
const router = express.Router();
const { disscussion } = require('./databases.js');
router.use(express.json());

const cors = require('cors');
router.use(cors());

router.put('/feedback', async (req, res) =>{

    const question_id = req.body.question_id;
    const answer_id = req.body.answer_id;
    const feedback = req.body.feedback

    const find_disscussion = await disscussion.findOne({_id : question_id });
    const find_answer = find_disscussion.answers.find( id => id._id.toString() === answer_id)

    try{
        if(feedback === 0)
            {
                await disscussion.updateOne(
                    { _id: question_id, 'answers._id': answer_id }, 
                    { $set: { 'answers.$.like': (find_answer.like) + 1 } } 
                );
                
                
        
                res.status(200).json({
                    msg : "answer like updated"
                })
            }

            else if( feedback === 1){

                await disscussion.updateOne(
                    { _id: question_id, 'answers._id': answer_id }, 
                    { $set: { 'answers.$.dislike': (find_answer.dislike) + 1 } } 
                );
        
                res.status(200).json({
                    msg : "answer dislike updated"
                })
            }

            else if( feedback === 2){
                
                await disscussion.updateOne(
                    { _id: question_id, 'answers._id': answer_id }, 
                    { $set: { 'answers.$.upvote': (find_answer.upvote) + 1 } } 
                );
        
                res.status(200).json({
                    msg : "answer upvote updated"
                })
            }

            else if( feedback === 3){
                
                await disscussion.updateOne(
                    { _id: question_id, 'answers._id': answer_id }, 
                    { $set: { 'answers.$.downvote': (find_answer.downvote) + 1 } } 
                );
        
                res.status(200).json({
                    msg : "answer downvote updated"
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
