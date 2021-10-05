import express from "express";
import {aa} from "../controllers/controller.js"

const rootRouter = express.Router();

rootRouter.get("/aa", aa);

export default rootRouter;  