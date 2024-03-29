const mongoose=require("mongoose");
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")


const EmployeruserSchema = new mongoose.Schema({
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


// hashing the password
// userSchema.pre('save',async function(next){
//     if(this.isModified('password')){
//         this.password=await bcrypt.hash(this.password,12);
//         this.cpassword=await bcrypt.hash(this.cpassword,12);
//     }
//     next();
// });

//generating token
// userSchema.methods.generateAuthToken = async function(){
//     try{
//         let token = jwt.sign({_id:this._id},process.env.JWT);
//         this.tokens = this.tokens.concat({token:token});
//         await this.save();
//         return token;
//     }catch(err){
//         console.log(err);
//     }
// }

const EmployerUser=mongoose.model("SigninEmployer",EmployeruserSchema);


module.exports=EmployerUser;