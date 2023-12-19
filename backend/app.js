import express from "express"

const app = express();

app.use(express.json())

import productRoutes from './routes/product.routes.js'

app.use("/api/v1",productRoutes)

// Middleware for error
import errorMiddleware from "./middleware/error.js";
app.use(errorMiddleware)

export { app };
