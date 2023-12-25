import mongoose from "mongoose";
import validator from "validator";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Your Name"],
    maxLength: [30, "Name cannot exceed 30 characters"],
    minLength: [4, "Name should have more than 5 characters"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validator.isEmail, "Please Enter valid email."],
  },
  password: {
    type: String,
    required: [true, "Please enter your password."],
    minLength: [8, "Please enter your password."],
    select: false,
  },
  avatar: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  role: {
        type: String,
        default: "user"
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

userSchema.pre("save",async function(next){

  if(!this.isModified("password")){
      next();
  }

        this.password = await bcrypt.hash(this.password,10)
})

// Jwt Token
userSchema.methods.getJwtToken = function (){
  return jwt.sign({id: this._id}, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE
  })
}

// Comapare password
userSchema.methods.comparePassword = async function(enteredPassword){
  return await bcrypt.compare(enteredPassword, this.password);
}

export const User = mongoose.model("User",userSchema)
