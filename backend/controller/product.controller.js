import { Product } from "../models/product.model.js"


// Create products -- Admin
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

export const getAllProducts = async (req, res) => {
    const products = await Product.find();

    res.status(200).json({
        success: true,
        products
    })
}

// Update Product --Admin
export const updateProduct = async (req, res, next) => {
    
    let product = await Product.findById(req.params.id);

    if(!product){
       return res.status(500).json({
        success: false,
        message: "Product not found"
       })
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body,{
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true,
        product
    })

}

// Get product Details

export const getProductsDetails = async(req, res, next) => {

    const product = await Product.findById(req.params.id);

    if(!product){
        return res.status(500).json({
            success: false,
            message: "Product not found"
        })
    }

    res.status(200).json({
        success: true,
        product
    })

}

// Delete Product

export const deleteProduct = async (req, res, next) => {
   
    const product = await Product.findById(req.params.id)

    if(!product){
        return res.status(500).json({
            success: false,
            message: "Product not found."
        })
    }

    await product.deleteOne()

    res.status(200).json({
      success: true,
      message: "product deleted successfully"
    })

} 
