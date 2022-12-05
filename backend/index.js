const express = require("express")
const app = express()
const {connectDatabase}=require("./config/database")
const route = require("./routes/route");
const errorHandler = require("./middleware/errorHandler");
const cookieParser = require("cookie-parser");
const multer = require("multer");

require("dotenv").config({path:"config/config.env"})

app.use(express.json())
app.use(multer().any());
app.use(cookieParser());

connectDatabase()

app.use("/", route);
app.use(errorHandler);

app.listen(process.env.PORT,()=>{
    console.log(`server running on ${process.env.PORT}`)
})