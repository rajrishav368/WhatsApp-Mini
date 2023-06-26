const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

require("../db/conn");

const EmployerUser = require("../UserSchema/signup/SigninEmployer");
const SigninWorkforce = require("../UserSchema/signup/SigninWorkforce");
const SigninEmpowerer = require("../UserSchema/signup/SigninEmpowerer");
const CompanyInfoEmployer = require("../UserSchema/companyinfo/CompanyinfoEmployer");
const CompanyInfoWorkfoce = require("../UserSchema/companyinfo/CompanyinfoWorkforce");
const CompanyInfoEmpowerer = require("../UserSchema/companyinfo/CompanyinfoEmpowerer");
const CreateVacancy = require("../UserSchema/createvacancy/createvacancy");

const secretKey = "rishavrajmayankrajrakeshgupta";

const authenticateToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.sendStatus(401);
  }

  jwt.verify(token, "secretkey", (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }
    req.user = user;
    next();
  });
};

router.get("/", (req, res) => {
  res.send(`hello world from the server router js`);
});

router.post("/SigninEmployer", async (req, res) => {
  const { name, company, email, password, cpassword } = req.body;

  try {
    // Check if the email already exists
    const existingUser = await EmployerUser.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }
    const data = {
      name: name,
      company: company,
      email: email,
      password: password,
      cpassword: cpassword,
    };
    console.log(data);
    await EmployerUser.insertMany([data]);

    const token = jwt.sign({ email }, secretKey);

    res.status(201).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});
router.post("/loginEmployer", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await EmployerUser.findOne({ email, password });
    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }

    // Generate and sign a JWT token
    const token = jwt.sign({ email: user.email }, secretKey);

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});
router.post("/CompanyInfoEmployer", async (req, res) => {
  const {
    company,
    email,
    contact,
    country,
    region,
    companysize,
    description,
  } = req.body;

  try {
    // Get the email from the JWT token
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, secretKey);
    const userId = decodedToken.email;

    // Find the user by
    // console.log(userId);
    const user = await EmployerUser.findOne({ email:userId });
    // console.log(user);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    } else {
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
      return res.status(201).json({ message: "Information Submitted" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});
router.get("/CompanyInfoEmployer", async (req, res) => {
  try {
    // Get the email from the JWT token
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'secretKey');
    const email = decodedToken.email;

    // Find the user by email
    const user = await EmployerUser.findOne({ email:email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Find the company by companyName
    const company = await CompanyInfoEmployer.findOne({ companyName: user._id });
    if (!company) {
      return res.status(404).json({ message: 'Company not found' });
    }

    res.status(200).json(company);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

router.post("/SigninWorkforce", async (req, res) => {
  const { name, company, email, password, cpassword } = req.body;

  try {
    // Check if the email already exists
    const existingUser = await SigninWorkforce.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }
    const data = {
      name: name,
      company: company,
      email: email,
      password: password,
      cpassword: cpassword,
    };
    console.log(data);
    await SigninWorkforce.insertMany([data]);

    const token = jwt.sign({ email }, "secretKey");

    res.status(201).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});
router.post("/loginWorkforce", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await EmployerUser.findOne({ email, password });
    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }

    // Generate and sign a JWT token
    const token = jwt.sign({ email: user.email }, secretKey);

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});
router.post("/CompanyinfoWorkforce", authenticateToken, async (req, res) => {
  const {
    company,
    email,
    contact,
    country,
    region,
    companysize,
    description,
  } = req.body;

  try {
    // Get the email from the JWT token
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, secretKey);
    const userId = decodedToken.email;

    // Find the user by
    // console.log(userId);
    const user = await SigninWorkforce.findOne({ email:userId });
    // console.log(user);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    } else {
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
      return res.status(201).json({ message: "Information Submitted" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

router.post("/SigninEmpowerer", async (req, res) => {
  const { name, company, email, password, cpassword } = req.body;

  try {
    // Check if the email already exists
    const existingUser = await SigninEmpowerer.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }
    const data = {
      name: name,
      company: company,
      email: email,
      password: password,
      cpassword: cpassword,
    };
    console.log(data);
    await SigninEmpowerer.insertMany([data]);

    const token = jwt.sign({ email }, "secretKey");

    res.status(201).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});
router.post("/loginEmpowerer", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await EmployerUser.findOne({ email, password });
    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }

    // Generate and sign a JWT token
    const token = jwt.sign({ email: user.email }, secretKey);

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
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

  try {
    // Get the email from the JWT token
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, secretKey);
    const userId = decodedToken.email;

    // Find the user by
    // console.log(userId);
    const user = await SigninEmpowerer.findOne({ email:userId });
    // console.log(user);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    } else {
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
      return res.status(201).json({ message: "Information Submitted" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
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

router.get("/CreateVacancy", async (req, res) => {
  try {
    // Fetch all users from the database
    const users = await CreateVacancy.find();

    // Send the users as a JSON response
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

// router.get("/SigninEmployer", async (req, res) => {
//   const { email, password } = req.query;

//   try {
//     // Find the user by username
//     const user = await EmployerUser.findOne({ email, password });
//     if (!user) {
//       return res.status(401).json({ message: "Invalid username or password" });
//     }

//     res.status(200).json({ message: "Login successful" });
//   } catch (err) {
//     console.error("Login error", err);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });
// router.get("/SigninWorkforce", async (req, res) => {
//   const { email, password } = req.query;

//   try {
//     // Find the user by username
//     const user = await SigninWorkforce.findOne({ email, password });
//     if (!user) {
//       return res.status(401).json({ message: "Invalid username or password" });
//     }

//     res.status(200).json({ message: "Login successful" });
//   } catch (err) {
//     console.error("Login error", err);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });
// router.get("/SigninEmpowerer", async (req, res) => {
//   const { email, password } = req.query;

//   try {
//     // Find the user by username
//     const user = await SigninEmpowerer.findOne({ email, password });
//     if (!user) {
//       return res.status(401).json({ message: "Invalid username or password" });
//     }

//     res.status(200).json({ message: "Login successful" });
//   } catch (err) {
//     console.error("Login error", err);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

// router.post("/CompanyInfoWorkforce", authenticateToken, async (req, res) => {
//   try {
//     // Get the user ID from the authenticated token

//     const userId = req.user.userId;

//     // // Find the user in the database
//     const user = await CompanyInfoWorkfoce.findById(userId);
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     // // Find the company profile associated with the user
//     const companyProfile = await CompanyInfoWorkfoce.findOne({
//       user: user._id,
//     });
//     if (!companyProfile) {
//       return res.status(404).json({ message: "Company profile not found" });
//     }

//     res.json(companyProfile);
//   } catch (error) {
//     console.error(error);
//     res.sendStatus(500);
//   }
// });
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
