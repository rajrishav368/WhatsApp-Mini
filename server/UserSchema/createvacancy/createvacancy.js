const mongoose=require("mongoose");

const CreateVacancyUserSchema = new mongoose.Schema({
    title: {
        type: String,
        required:true,
    },
    deadline:{
        type:String,
        required:true,
    },
    // date:{
    //     type:Date.now(),
    //     required:true,
    // },
    employmentype:{
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
    // language:{
    //     type:String,
    //     required:true,
    // },
    emplevel:{
        type:String,
        required:true,
    },
    marketoption:{
        type:String,
        required:true,
    },
    minsalary:{
        type:Number,
        required:true,
    },
    maxsalary:{
        type:Number,
        required:true,
    },
    currency:{
        type:String,
        required:true,
    },
    salaryperiod:{
        type:String,
        required:true,
    },
    educationlevel:{
        type:String,
        required:true,
    },
    minexperience:{
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
const CreateVacancy=mongoose.model("createvacancy",CreateVacancyUserSchema);

module.exports=CreateVacancy;