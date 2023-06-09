
const Wishlist = require("../model/wishlist.model");


const createWishlistHandler = async(req,res)=>{
    const newWishlist = new Wishlist(req.body);
    try{
        const SavedWishlist = await new Wishlist.save();
        res.status(201).json(SavedWishlist);
    }
    catch(err){
        res.status(500).json({message:"failed to create wishlist"});
    }
}

const deleteWishlistHandler =  async(req,res)=>{
    try{
        await Wishlist.findByIdAndDelete(req.params.id);
        res.json({message:"Hotel Deleted from Wishlist"})
    }catch(err){
        res.status(500).json({message:"Could not delete hotel from wishlist"})
        console.log(err);
    }
}

const getWishlistHandler = async(req,res)=>{
    try{
        const wishlist  = await Wishlist.find({});
        wishlist?res.json(wishlist):res.json({message:"No Hotel Found"});
    }
    catch(err){
        console.log(err);
        res.status(500).json(err);
    }
}

module.exports = {createWishlistHandler,deleteWishlistHandler,getWishlistHandler};