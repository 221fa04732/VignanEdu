const express = require("express");
const router = express.Router();
const { disscussion } = require('./databases.js');
router.use(express.json());

const cors = require('cors');
router.use(cors());

router.put('/question' ,async (req, res)=>{

    const question_id = req.body.question_id;

    try{
        await disscussion.deleteOne({
            _id : question_id
        })

        res.status(200).json({
            msg : "questin deleted"
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
