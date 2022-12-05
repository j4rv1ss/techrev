const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true
    },
    lastName:{
        type:String,
        required:true,
        trim:true
    },
    userName:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    phone:{
        type:String,
        required:true,
        trim:true
    },
    dob:{
        type:String,
        required:true,
        trim:true
    },
    gender:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        trim:true
    },
    confirmPassword:{
        type:String,
        required:true,
        trim:true
    },
    image:{
        type:String,
        required:true
    },
    address: {
        landmark: {
          type: String,
          required: true,
          trim: true,
        },
        city: {
          type: String,
          required: true,
          trim: true,
        },
        state: {
          type: String,
          required: true,
          trim: true,
        },
        country: {
          type: String,
          required: true,
          trim: true,
        },
        zipcode: {
          type: Number,
          required: true,
          trim: true,
        },
      },
})

module.exports = mongoose.model("customer", userSchema)