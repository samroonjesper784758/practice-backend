const express = require("express");
const app = express();
const PORT = 8000;

// mongoDB imports
const {mongoDBConnect} = require("./connection");

// connection
mongoDBConnect("mongodb://localhost:27017/practice_app")

// middleware
app.use(express.json())

// import user routes
const userRouter = require("./routes/user.routes");

// inital route i.e., verify server is running
app.get("/", (req, res) => {
  res.json("User Backend");
});

app.use("/users", userRouter);

app.listen(PORT, () => console.log("Server is running on port: ", PORT));
