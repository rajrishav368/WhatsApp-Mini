const mongoose=require("mongoose")

const SigninEmpowererUserSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true,
    },
    company:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    cpassword:{
        type:String,
        required:true,
    },
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]
});
const SigninEmpowerer=mongoose.model("signinempowerer",SigninEmpowererUserSchema);

module.exports=SigninEmpowerer;