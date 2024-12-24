const express = require("express");
const router = express.Router();
const { disscussion } = require('./databases.js');
router.use(express.json());

const cors = require('cors');
router.use(cors());

router.get('/disscussion', async (req, res) =>{

    try{

        const all_disscussion =await disscussion.find({});

        res.status(200).json({
            msg : "get all disscussion",
            disscussion : all_disscussion
        })
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
