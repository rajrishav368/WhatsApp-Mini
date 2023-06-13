const express=require("express")
const app=express();
require("./db/conn")
const dotenv=require("dotenv")
const port=8000
const cors=require("cors")
app.use(express.json());
app.use(cors());
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: true }));

dotenv.config({path:'./config.env'}) 

app.use(require('./router/auth'));

app.listen(port,()=>{
    console.log(`Server is running at ${port}`);   
    });


    // app.post("/sendData",async(req,res)=>{
//     const {name,company,email,password,cpassword}=req.body;

//     const data={
//         name:name,
//         company:company,
//         email:email,
//         password:password,
//         cpassword:cpassword
//     }
//     await user.insertMany();
// })

// app.get("/",(req,res)=>{
//     res.send("Hello World");
// })
// app.get("/about",middleware,(req,res)=>{
//     res.send("About page");
// })

