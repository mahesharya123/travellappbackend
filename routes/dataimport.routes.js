const express = require('express');
const mongoose =  require('mongoose');

const  Hotel = require("../model/hotel.model");

const hotels = require("../data/hotel");

const router = express.Router();

router.route("/")
.post(async (req,res)=>{
    try{
        const hotelInDB = await Hotel.insertMany(hotels.data);
        res.json(hotelInDB)
    }
    catch(err){
        console.log(err);
        res.json({message: "Could not add Data to DB"})
    }
})

module.exports =  router;