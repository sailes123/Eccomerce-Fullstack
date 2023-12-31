import express from "express"
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json())
app.use(cookieParser())

import productRoutes from './routes/product.routes.js'
import userRoutes from './routes/user.routes.js'

app.use("/api/v1",productRoutes)
app.use("/api/v1",userRoutes)

// Middleware for error
import errorMiddleware from "./middleware/error.js";

app.use(errorMiddleware)

export { app };
