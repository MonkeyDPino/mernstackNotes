const userCtrls = {};

//? Exporto el modelo de las notas
const User = require('../models/User');


userCtrls.getUsers = async (req, res) =>{
    const Users = await User.find();
    res.send(Users);
}

userCtrls.createUser = async (req, res) => {
    const {username} = req.body;
    const newUser = new User({
        username,
    })
    await newUser.save();
    res.json({message:"User created successfully"});
}

userCtrls.deleteUser = async(req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({message:"User deleted successfully"});
}



module.exports = userCtrls;