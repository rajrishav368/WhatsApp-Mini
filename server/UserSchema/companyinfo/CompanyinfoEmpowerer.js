const mongoose=require("mongoose")

const CompanyinfoEmpowererUserSchema = new mongoose.Schema({
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
const CompanyInfoEmpowerer=mongoose.model("companyinfoEmpowerer",CompanyinfoEmpowererUserSchema);

module.exports=CompanyInfoEmpowerer;