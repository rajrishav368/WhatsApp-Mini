const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("../db/conn");

const EmployerUser = require("../UserSchema/signup/SigninEmployer");
const SigninWorkforce = require("../UserSchema/signup/SigninWorkforce");
const SigninEmpowerer = require("../UserSchema/signup/SigninEmpowerer");
const CompanyInfoEmployer = require("../UserSchema/companyinfo/CompanyinfoEmployer");
const CompanyInfoWorkfoce = require("../UserSchema/companyinfo/CompanyinfoWorkforce");
const CompanyInfoEmpowerer = require("../UserSchema/companyinfo/CompanyinfoEmpowerer");
const CreateVacancy = require("../UserSchema/createvacancy/createvacancy");

router.get("/", (req, res) => {
  res.send(`hello world from the server router js`);
});

router.post("/SigninEmployer", async (req, res) => {
  const { name, company, email, password, cpassword } = req.body;

  const data = {
    name: name,
    company: company,
    email: email,
    password: password,
    cpassword: cpassword,
  };

  await EmployerUser.insertMany([data]);
});

router.post("/SigninWorkforce", async (req, res) => {
  const { name, company, email, password, cpassword } = req.body;

  const data1 = {
    name: name,
    company: company,
    email: email,
    password: password,
    cpassword: cpassword,
  };
  console.log(data1);
  await SigninWorkforce.insertMany([data1]);
});

router.post("/SigninEmpowerer", async (req, res) => {
  const { name, company, email, password, cpassword } = req.body;

  const data = {
    name: name,
    company: company,
    email: email,
    password: password,
    cpassword: cpassword,
  };
  console.log(data);
  await SigninEmpowerer.insertMany([data]);
});
router.post("/CompanyinfoEmployer", async (req, res) => {
  const {
    company,
    email,
    contact,
    country,
    region,
    companysize,
    description,
  } = req.body;

  const data = {
    company: company,
    email: email,
    contact: contact,
    country: country,
    region: region,
    companysize: companysize,
    description: description,
  };
  console.log(data);
  await CompanyInfoEmployer.insertMany([data]);
});
router.post("/CompanyinfoWorkforce", async (req, res) => {
  const {
    company,
    email,
    contact,
    country,
    region,
    companysize,
    description,
  } = req.body;

  const data = {
    company: company,
    email: email,
    contact: contact,
    country: country,
    region: region,
    companysize: companysize,
    description: description,
  };
  console.log(data);
  await CompanyInfoWorkfoce.insertMany([data]);
});
router.post("/CompanyinfoEmpowerer", async (req, res) => {
  const {
    company,
    email,
    contact,
    country,
    region,
    companysize,
    description,
  } = req.body;

  const data = {
    company: company,
    email: email,
    contact: contact,
    country: country,
    region: region,
    companysize: companysize,
    description: description,
  };
  console.log(data);
  await CompanyInfoEmpowerer.insertMany([data]);
});
router.post("/CreateVacancy", async (req, res) => {
  const {
    title,
    deadline,
    // date,
    employmentype,
    country,
    region,
    // language,
    emplevel,
    marketoption,
    minsalary,
    maxsalary,
    currency,
    salaryperiod,
    educationlevel,
    minexperience,
    description,
  } = req.body;

  const data = {
    title: title,
    deadline: deadline,
    // date: date,
    employmentype: employmentype,
    country: country,
    region: region,
    // language: language,
    emplevel: emplevel,
    marketoption: marketoption,
    minsalary: minsalary,
    maxsalary: maxsalary,
    currency: currency,
    salaryperiod: salaryperiod,
    educationlevel: educationlevel,
    minexperience: minexperience,
    description: description,
  };
  console.log(data);
  await CreateVacancy.insertMany([data]);
});

module.exports = router;

/*using promises*/
// router.post('/register',(req,res)=>{
//     const{name,email,phone,work,password,cpassword}=req.body

//     if(!name||!email||!phone||!work||!password||!cpassword){
//         return res.status(422).json({error:"plz filled the field properly"});
//     }

//     User.findOne({email:email})
//     .then((userExist)=>{
//         if(userExist){
//             return res.status(422).json({error:"email already exist"});
//         }
//         const user=new User({name,email,phone,work,password,cpassword})

//         user.save().then(()=>{
//             res.status(201).json({message:"user registered successfully"})
//         }).catch((err)=>{
//             res.status(500).json({error:"Failed to register"})
//         })
//     }).catch(err=>{
//         console.log(err)
//     })
//     // console.log(req.body);
//     // res.json({message:req.body});
// });
//

//using async await original
// router.post('/register',async(req,res)=>{
//     const{name,email,phone,work,password,cpassword}=req.body

//     if(!name||!email||!phone||!work||!password||!cpassword){
//         return res.status(422).json({error:"plz filled the field properly"});
//     }

//     try{
//         const userExist=await User.findOne({email:email});

//         if(userExist){
//             return res.status(422).json({error:"email already exist"});
//         }
//         const user=new User({name,email,phone,work,password,cpassword});

//         const userRegister=await user.save();

//         if(userRegister){
//             res.status(201).json({message:"user registered successfully"})
//         }

//     }catch(err){
//         console.log(err);
//     }
// });

// router.post("/register", async (req, res) => {
//   const { name, email, phone, work, password, cpassword } = req.body;

//   if (!name || !email || !phone || !work || !password || !cpassword) {
//     return res.status(422).json({ error: "plz filled the field properly" });
//   }

//   try {
//     const userExist = await User.findOne({ email: email });

//     if (userExist) {
//       return res.status(422).json({ error: "email already exist" });
//     }
//     const user = new User({ name, email, phone, work, password, cpassword });

//     const userRegister = await user.save();

//     if (userRegister) {
//       res.status(201).json({ message: "user registered successfully" });
//     }
//   } catch (err) {
//     console.log(err);
//   }
// });

// router.post("/register", async (req, res) => {
//   const { name, company, email, password, cpassword } = req.body;

//   if (!name ||!company || !email || !password || !cpassword) {
//     return res.status(422).json({ error: "plz filled the field properly" });
//   }

//   try {
//     const userExist = await User.findOne({ email: email });

//     if (userExist) {
//       return res.status(422).json({ error: "email already exist" });
//     }
//     const user = new User({ name, company, email, password, cpassword});

//     const userRegister = await user.save();

//     if (userRegister) {
//       res.status(201).json({ message: "user registered successfully" });
//     }
//   } catch (err) {
//     console.log(err);
//   }
// });

//login route

// router.post("/signin", async (req, res) => {
//   // console.log(req.body);
//   // res.json({message:"awesome"});
//   try {
//     const { email, password } = req.body;

//     if (!email || !password) {
//       return res.status(400).json({ error: "plz fill the data" });
//     }
//     const userlogin = await User.findOne({ email: email });
//     //    console.log(userlogin.email);
//     if (userlogin) {
//       const isMatch = await bcrypt.compare(password, userlogin.password);

//       const token = await userlogin.generateAuthToken();
//       console.log(token);

//       res.cookie("jwtoken", token, {
//         expires: new Date(Date.now() + 258920000),
//         httpOnly: true,
//       });

//       if (!isMatch) {
//         res.status(400).json({ error: "Invalid credentials" });
//       } else {
//         res.json({ message: "user successfull" });
//       }
//     } else {
//       res.status(400).json({ error: "Invalid credentials" });
//     }
//   } catch (err) {
//     console.log(err);
//   }
// });
