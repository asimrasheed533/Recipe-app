const express = require("express");
const monogoose = require("mongoose");
const cors = require("cors");
const userRouter = require("./router/userRouter");
const category = require("./router/categories");
const product = require("./router/Products");
const dotenv = require("dotenv");
const morgan = require("morgan");
const verifyToken = require("./middleware/auth");

dotenv.config();

// api config
const app = express();
const port = process.env.PORT || 9000;

//middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// for every get request we will check if the token is valid

app.use("/api", (req, res, next) => {
  if (req.method === "GET") {
    verifyToken(req, res, next);
  }
  next();
});

// db config
monogoose.connect(process.env.MONGO_URL).then(() => {
  console.log("Database connected");
});
// api endpoints
app.get("/", (req, res) => {
  res.status(200).json({
    message: "welcome to the api",
  });
});
app.use("/api/users", userRouter);
app.use("/api/categories", category);
app.use("/api/products", product);

//use morgen
app.use(morgan("dev"));

// listener
app.listen(port, () =>
  console.log(`Server is running on port http://localhost:${port}/`)
);
