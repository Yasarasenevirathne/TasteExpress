import express from "express"
import cors from "cors"
import { config } from "dotenv"



// app config
const app = express()
const port = 4000

//middleware
app.use(express.json())
app.use(cors())