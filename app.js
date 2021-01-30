const express = require("express");
const app = express();
require("dotenv/config");
const api = process.env.API_URL;

app.listen(process.env.PORT, () => {
  console.log("Server is running at port " + process.env.PORT);
});
