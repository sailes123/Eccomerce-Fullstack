import { app } from "./app.js";
import dotenv from "dotenv";
import { connectDataBase } from "./config/db.js";

dotenv.config({
        path: 'backend/config/.env'
})

// Connect Database

connectDataBase();

const server = app.listen(process.env.PORT, ()=> {
        console.log(`Server is working on https://localhost:${process.env.PORT}`)
})

// Unhandled Prmoise Rejection
process.on("unhandledRejection", err=> {
        console.log(`Error: ${err.message}`);
        console.log('Shutting down the server due to unhandled Promise Rejection')

        server.close(()=>{
                process.exit(1)
        })
})


