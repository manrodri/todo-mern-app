const tasks = require("./routes/tasks");
const connection = require("./db");
const cors = require("cors");
const express = require("express");
const app = express();
require("dotenv").config();
const morgan = require("morgan");


app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

connection();

app.use("/api/tasks", tasks);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
