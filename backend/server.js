import { app } from "./app.js";
import dotenv from "dotenv";
import { connectDataBase } from "./config/db.js";

dotenv.config({
        path: 'backend/config/.env'
})

// Connect Database

connectDataBase();

app.listen(process.env.PORT, ()=> {
        console.log(`Server is working on https://localhost:${process.env.PORT}`)
})
