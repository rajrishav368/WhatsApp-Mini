const mongoose=require("mongoose")

const SigninWorkforceUserSchema = new mongoose.Schema({
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
const SigninWorkforce=mongoose.model("signinworkforce",SigninWorkforceUserSchema);

module.exports=SigninWorkforce;