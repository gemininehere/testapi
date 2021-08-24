let mongoose=require("mongoose")
let Schema=mongoose.Schema

let userModel=new Schema(
    {
        username:String
    }
)
const usermodel=mongoose.model("usermodel",userModel,"user")
module.exports=usermodel