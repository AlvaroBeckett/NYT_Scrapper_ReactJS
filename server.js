const bodyParser = require("body-parser");
const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/NYT_Scrapper_ReactJS");


app.listen(PORT, function() {
  console.log(`Server now listening on PORT ${PORT}!`);
});
