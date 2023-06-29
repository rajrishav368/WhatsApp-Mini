const mongoose=require("mongoose");

const DB= "mongodb+srv://rajrishav368:sonumonu@cluster0.agbby30.mongodb.net/mernstack?retryWrites=true&w=majority";
mongoose.set('useCreateIndex', true)

mongoose.connect(DB,{ useNewUrlParser: true, useUnifiedTopology:true}).then(()=>{
    console.log("connection successfull")
}).catch((err)=>{
    console.log(err);
})
