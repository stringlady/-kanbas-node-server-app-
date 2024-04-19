import express from 'express'
import Hello from "./Hello.js"
import Lab5 from './Lab5.js'
import cors from 'cors'
import dotenv from 'dotenv'

import mongoose from "mongoose";
import UserRoutes from './Users/routes.js';

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
const url = process.env.DATABASE_URL
mongoose.connect(url);
Lab5(app);
UserRoutes(app);
Hello(app)
app.listen(4000)