const express =  require ('express');

const router = express.Router();

const Category = require("../model/category.model");

router.route("/")
.get (async(rq,res)=>{
    try{
        const Categories = await Category.find({});
        res.json(Categories);
    }
    catch(err){
        res.status(404).json({message:"Could NOt found data"});
    }
})

module.exports =  router;
