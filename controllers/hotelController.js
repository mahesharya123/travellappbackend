const Hotel  = require("../model/hotel.model");


const getAllHotel = async(req,res)=>{
    const hotelCatrgory = req.query.category;
        
    try{
        let hotels;
        if(hotelCatrgory){
            hotels = await Hotel.find({category:hotelCatrgory});
     

        }
        else{
            hotels = await Hotel.find({});
        }
        hotels?res.json(hotels): res.status(404).json({message:"No Data found"})
         
    }
    catch(err){
        console.log(err);

    }
}

module.exports = getAllHotel;