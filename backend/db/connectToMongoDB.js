import mongoose from "mongoose";

const connectToMOngoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("mongo db connected");
  } catch (error) {
    console.log("error in connecting mongo db", error.message);
  }
};

export default   connectToMOngoDB;