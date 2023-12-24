import { catchAsyncErrors } from "../middleware/catchAsyncError.js";
import { User } from "../models/user.model.js";

export const registerUser = catchAsyncErrors( async(req,res,next) => {
   const {name, email, password} = req.body;

   const user = await User.create({
        name, email, password, avatar: {
                public_id: "this is a simple id",
                url: "publicProfileUrl"
        }
   })

   const token = user.getJwtToken();

   res.status(201).json({
        success: true,
        token
   })
}
)
