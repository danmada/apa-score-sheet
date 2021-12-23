
const express = require("express");
const cors = require("cors");

const data = require("./data");

const app = express();

app.use(cors());
  
app.get("/api", (req, res) => {
  res.json(data);
});
  

  
app.listen(8080, () => {
  console.log("Server started on port 8080");
});