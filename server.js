const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();


const hoteldataAddtoDBrouter = require("./routes/dataimport.routes");
const categorydataAddtoDBrouter = require("./routes/categoryimport");
 const hotelRouter = require("./routes/hotel.router");
 
 const categoryRouter = require("./routes/category.router");
 const singleHotelRouter = require("./routes/singlehotel.router");
 const authRouter = require("./routes/auth.router");
 const wishlistRouter = require("./routes/wishlist.rout");

 const connectDB =  require("./config/dbconfig");


const PORT = 3500;

const app = express();

app.use(express.json());
connectDB();

app.get("/",(req,res)=>{
    res.send("Hello Geeks")
})
app.use("/api/hoteldata",hoteldataAddtoDBrouter);
app.use("/api/categorydata",categorydataAddtoDBrouter);
app.use("/api/hotels",hotelRouter);
app.use("/api/hotels",singleHotelRouter);
app.use("/api/category",categoryRouter);
app.use("/api/auth",authRouter);
app.use("/api/wishlist",wishlistRouter);


mongoose.connection.once("open", ()=>{
    console.log("Connected to DB");
    app.listen(process.env.PORT||PORT,()=>{
        console.log("Server is running SUccessfully");
    })

})

