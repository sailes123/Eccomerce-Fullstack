import { Product } from "../models/product.model.js"


// Create products
export const createProduct = async (req, res)=> {
  
   try{ const product = await Product.create(req.body)

    res.status(201).json({
        success: true,
        product
    })} catch(err){
        res.status(400).json({
            err
        })
    }
}

const getAllProducts = (req, res) => {
    res.status(200).json({message: "route is working fine."})
}

export { getAllProducts }
