import express from "express"

const app = express();

app.use(express.json())

import productRoutes from './routes/product.routes.js'

app.use("/api/v1",productRoutes)

export { app };
