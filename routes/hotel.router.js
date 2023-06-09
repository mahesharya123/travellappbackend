const express =  require ('express');

const router = express.Router();

const Hotel = require("../model/hotel.model")
const getAllHotel = require("../controllers/hotelController");

router.route("/")
.get(getAllHotel);

module.exports = router;