const mongoose=require("mongoose");

const DB= "mongodb+srv://rajrishav368:sonumonu@cluster0.agbby30.mongodb.net/mernstack?retryWrites=true&w=majority";

mongoose.connect(DB).then(()=>{
    console.log("connection successfull")
}).catch((err)=>{
    console.log(err);
})
