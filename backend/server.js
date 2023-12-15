import { app } from "./app.js";
import dotenv from "dotenv";

dotenv.config({
        path: 'backend/config/.env'
})

app.listen(process.env.PORT, ()=> {
        console.log(`Server is working on https://localhost:${process.env.PORT}`)
})
