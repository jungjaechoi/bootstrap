import express from "express";
import rootRouter from "./routers/rootRouter.js";
import mongoose from "mongoose";

const app = express();

const PORT = 4000;//암묵적으로 4000사용

mongoose.connect("mongodb://127.0.0.1:27017/wetube",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
   
});

const db = mongoose.connection;

const handleLsn = () => 
console.log(`✅ Server listening on port http://localhost:${PORT}🚀`);

const handleOpen = () => console.log("✅ Connected to DB");
const handleError = (error) => console.log("DB Error", error);

app.use("/aa", rootRouter);

db.on("error", handleError);
db.once("open", handleOpen);

app.listen(4000, handleLsn);




