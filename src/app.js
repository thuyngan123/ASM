import express from "express";
import productRouter from "./routers/product";
import UserRouter from "./routers/auth"
import CategoryRouter from "./routers/category"
import uploadImageRouter from "./routers/uploadImage"
import cors from "cors";
import mongoose from "mongoose";

const app = express();

//middlware
app.use(express.json());
app.use(cors())



//router
app.use("/api", productRouter);
app.use("/api", UserRouter);
app.use("/api", CategoryRouter);
app.use("api", uploadImageRouter)

mongoose.connect("mongodb://127.0.0.1:27017/We17301")
// app.listen(8080, () => {
//     console.log("Server is running port 8080");
// });

export const viteNodeApp = app;