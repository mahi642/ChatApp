import express from "express";
import dotenv from "dotenv";
import cookieparser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import connectToMongoDB from "./db/connectToMongoDb.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;
app.use(express.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   res.send("hello");
// });

app.use(express.json());
app.use(cookieparser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users",userRoutes);
app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`server running in port ${PORT}`);
});
