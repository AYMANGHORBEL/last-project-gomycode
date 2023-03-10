const express = require("express");
const connectDB = require("./config/connectDB");
const user = require("./routes/user");
const product = require("./routes/product");
const app = express();
app.use(express.json());
const PORT = 9000;
connectDB();
app.use("/user", user);
app.use("/product", product);

app.listen(PORT, (err) =>
  err ? console.log(err) : console.log(`server is running on port ${PORT}`)
);
