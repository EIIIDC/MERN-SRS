import express from 'express';
import User from '../models/User.js'; 

const router = express.Router();


router.get('/', async (req, res) => {
    try {
   
        const invItems = await User.find({}); 
        res.status(200).json({ success: true, data: invItems });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error" });
   
    }
});


router.post('/', async (req, res) => {
    const { username, password, role } = req.body;

    try {
        const newUser = new User({ username, password, role });
        await newUser.save();
        res.status(201).json({ success: true, data: newUser });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error" });
    }
});

export default router;