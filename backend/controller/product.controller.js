import { catchAsyncErrors } from "../middleware/catchAsyncError.js"
import { Product } from "../models/product.model.js"
import ErrorHandler from "../utils/errorHandler.js"


// Create products -- Admin
export const createProduct = catchAsyncErrors(async (req, res)=> {
  
   try{ const product = await Product.create(req.body)

    res.status(201).json({
        success: true,
        product
    })} catch(err){
        res.status(400).json({
            err
        })
    }
})

export const getAllProducts = catchAsyncErrors(async (req, res) => {
    const products = await Product.find();

    res.status(200).json({
        success: true,
        products
    })
})

// Update Product --Admin
export const updateProduct = catchAsyncErrors(async (req, res, next) => {
    
    let product = await Product.findById(req.params.id);

    if(!product){
        return next(new ErrorHandler("Product not found.", 404))
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

})

// Get product Details

export const getProductsDetails = catchAsyncErrors(async(req, res, next) => {

    const product = await Product.findById(req.params.id);

    if(!product){
        return next(new ErrorHandler("Product not found.", 404))
    }

    res.status(200).json({
        success: true,
        product
    })

})

// Delete Product

export const deleteProduct = catchAsyncErrors(async (req, res, next) => {
   
    const product = await Product.findById(req.params.id)

    if(!product){
        return next(new ErrorHandler("Product not found.", 404))
    }

    await product.deleteOne()

    res.status(200).json({
      success: true,
      message: "product deleted successfully"
    })

} )
