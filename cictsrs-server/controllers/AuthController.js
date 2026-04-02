import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js'

const login = async(req, res) => {
    try {
        const {email, password} = req.body;

        const user = await User.findOne({email});
        if (!user) {
            return res.status(401).json({success: false ,message: "Email is not registered to the system"});
        }
        const passMatch = await bcrypt.compare(password, user.password);
        if (!passMatch) {
            return res.status(401).json({success:false, message:"Invalid credentials"});
        }
        const token = jwt.sign({id: user._id, role: user.role}, process.env.JWT_SECRET,{expiresIn: '1h'});
        
        return res.Status(200).json({succes: true, message:"Login Success", token, user: {id: user._id, name: user.name, email: user.email, office: user.office, role: user.role} });
    } catch (error) {
        return res.status(500).json({succes: false, message:"Internal server errol"});

    }

}

export {login};