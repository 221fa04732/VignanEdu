const express = require('express')
const axios = require('axios');
const router = express.Router();
const { chatbot } = require('./databases');
router.use(express.json());

const cors = require('cors');
router.use(cors());

require('dotenv').config();
const APIKEY = process.env.ChatBotAPIKey;


router.post('/chat',async(req,res)=>{
    const url = 'https://phindsearch-api.p.rapidapi.com/search';
    const options = {
    	method: 'POST',
    	headers: {
    		'x-rapidapi-key': APIKEY,
    		'x-rapidapi-host': 'phindsearch-api.p.rapidapi.com',
    		'Content-Type': 'application/json'
    	},
        body: JSON.stringify(req.body) 
    };
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return res.status(200).json(result);
    } catch (error) {
        console.error(error);
    }
});

module.exports = {
    router
}


  