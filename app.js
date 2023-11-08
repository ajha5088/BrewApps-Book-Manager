const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Routes = require("./routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

dotenv.config();
mongoose
  .connect(process.env.DB_URL, {})
  .then(() => {
    console.log("Connected to the database");
    // Start your application or perform further operations
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });

app.use(Routes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
