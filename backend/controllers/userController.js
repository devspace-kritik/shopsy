
// Route for user login
const loginUser = async (req, res) => {
    res.json({msg: "Login API working"})
}

// Route for user register
const registerUser = async (req, res) => {
    res.json({msg: "Register API working"})
}

// Route for admin login
const adminLogin = async (req, res) => {
    res.json({msg: "Admin Login API working"})
}

export {loginUser, registerUser, adminLogin}