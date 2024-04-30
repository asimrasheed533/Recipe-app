const express = require("express");
const monogoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const userRouter = require("./router/userRouter")
const category = require("./router/categories")
dotenv.config();

// api config
const app = express();
const port = process.env.PORT || 5000;  

//middleware
app.use(express.json());
app.use(cors());
// db config
monogoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Database connected")
})
// api endpoints
app.get("/", (req, res)=>{
    res.status(200).json({
        message:"welcome to the api"
    });
});
app.use("/api/users", userRouter);
app.use("/api/categories", category);  

// listener
app.listen(port, ()=>
console.log(`Server is running on port http://localhost:${port}/`)
) 