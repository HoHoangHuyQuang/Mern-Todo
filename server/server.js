import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
import ToDo from "./router/ToDo.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

var whitelist = ['http://localhost:3000', 'http://localhost:5000']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

// Monog connect
const URI = process.env.MONGO_URI;
 
// middleware
app.use(cors(corsOptions));
app.use(express.json({ limit: "30mb", type: "application/json" }));
app.use(express.urlencoded({ extended: true, limit: "30mb" }));

mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log("err", err);
    process.exit(-1);
  });

// routers

app.use("/api/todo", ToDo);

app.get("/", (req, res) => {
  res.send("Hello World!!");
});
app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.send("Error! Page not found");
  } else if (req.accepts("json")) {
    res.json({ message: "404 page not found" });
  } else {
    res.type("txt").send("Error! Page not found");
  }
});

app.listen(PORT, () =>
  console.log("App listening on port " + `${PORT}`)
);
