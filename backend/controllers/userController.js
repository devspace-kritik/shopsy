import vlidator from "validator";

// Route for user login
const loginUser = async (req, res) => {
    res.json({msg: "Login API working"})
}

// Route for user register
const registerUser = async (req, res) => {
    // try {
    //     const {name, email, password} = req.body;

    //     //Checking user already exists or not
    //     const exists = await userModel.findOne({email})
    //     if(exists){
    //         return res.json({success: false, message: "User already exists"});
    //     }

    //     //Validating email format and strong password
    //     if(!validator.isEmail){
    //         return res.json({success: false, message: "Please enter a valid email"});
    //     }
    //     if(password.length < 8){
    //         return res.json({success: false, message: "Please enter a sttrong password"});
    //     }
        
    // } catch (error) {
        
    // }
}

// Route for admin login
const adminLogin = async (req, res) => {
    res.json({msg: "Admin Login API working"})
}

export {loginUser, registerUser, adminLogin}