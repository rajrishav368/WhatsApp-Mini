const mongoose=require("mongoose")

const CompanyinfoWorkforceUserSchema = new mongoose.Schema({
    company: {
        type: String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    contact:{
        type:String,
        required:true,
    },
    country:{
        type:String,
        required:true,
    },
    region:{
        type:Number,
        required:true,
    },
    companysize:{
        type:String,
        required:true,
    },
    description:{
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
const CompanyInfoWorkforce=mongoose.model("companyinfoWorkforce",CompanyinfoWorkforceUserSchema);

module.exports=CompanyInfoWorkforce;