const mongoose = require("mongoose");

async function mongoDBConnect(url) {
  try {
    const connection = await mongoose.connect(url);
    if (connection) {
      console.log("MongoDB connected succesfully");
    }
  } catch (error) {
    console.log("Error while connecting to mongoDB", error);
  }
}

module.exports = { mongoDBConnect };
