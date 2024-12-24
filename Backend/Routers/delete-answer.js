const express = require("express");
const router = express.Router();
const { disscussion } = require('./databases.js');
router.use(express.json());

const cors = require('cors');
router.use(cors());

router.put('/answer',async (req, res)=>{

    const question_id = req.body.question_id;
    const answer_id = req.body.answer_id;

    try{
        await disscussion.updateOne(
            {_id : question_id, 'answers._id' : answer_id},
            {$pull : { answers : { _id: answer_id }}}
        )

        res.status(200).json({
            msg : "answer deleted"
        })
    }
    catch(error){
        res.status(400).json({
            msg : "error occured"
        })
    }
})


module.exports ={
  router
}
