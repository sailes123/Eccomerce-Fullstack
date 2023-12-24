import { catchAsyncErrors } from "../middleware/catchAsyncError";
import { User } from "../models/user.model";

export const registerUser = catchAsyncErrors( async(req,res,next) => {
   const {name, email, password} = req.body;

   const user = await User.create({
        name, email, password, avatar: {
                public_id: "this is a simple id",
                url: "publicProfileUrl"
        }
   })

   res.status(201).json({
        success: true,
        user
   })
}
)
