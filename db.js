const mongoose = require('mongoose')
const mongoURI = "mongodb+srv://obul12:Obul123@cluster0.p1mlwmz.mongodb.net/Mymern?retryWrites=true&w=majority&appName=Cluster0";

const connectToMongo = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(mongoURI);
    console.log("Connected to Mongo Successfully!");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectToMongo;
