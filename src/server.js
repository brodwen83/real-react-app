import express from "express";
import path from "path";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import Promise from "bluebird";
import auth from "./routes/auth";

dotenv.config();

const app = express();

// const db = require("../config/keys").mongoURI;
mongoose
  .connect(
    process.env.MONGODB_URL,
    { useNewUrlParser: true, useCreateIndex: true }
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log("Can't connect to the database"));

mongoose.Promise = Promise;

app.use(bodyParser.json());

app.use("/api", auth);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// PORT
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started in port ${port}`));
