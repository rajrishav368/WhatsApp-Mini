const mongoose=require("mongoose")

const CompanyinfoEmployerUserSchema = new mongoose.Schema({
    company: {
        type: String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
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
        type:String,
        required:true,
    },
    companysize:{
        type:Number,
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
const CompanyInfoEmployer=mongoose.model("companyinfoemployer",CompanyinfoEmployerUserSchema);

module.exports=CompanyInfoEmployer;