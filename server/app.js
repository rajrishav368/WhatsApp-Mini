const express = require("express");
const app = express();
require("./db/conn");
const port = 8000;
const cors = require("cors");
app.use(express.json());
app.use(cors());
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));


app.use(require("./router/auth"));


app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});


