import { User } from "../models/user.model.js";
import ErrorHandler from "../utils/errorHandler.js";
import { catchAsyncErrors } from "./catchAsyncError.js";
import jwt from "jsonwebtoken";

export const isAuthenticatedUser = catchAsyncErrors( async (req, res, next ) => {

        const { token } = req.cookies;

        if(!token){
                return next(new ErrorHandler("Please Login to access this resource", 401))
        }

        const decodedData = jwt.verify(token, process.env.JWT_SECRET);

        await User.findById(decodedData.id)

        req.user = await User.findById(decodedData.id)

        next()

})
