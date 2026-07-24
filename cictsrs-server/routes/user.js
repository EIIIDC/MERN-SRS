import express from 'express';
import User from '../models/User.js'; 

const router = express.Router();

// GET all inventory items
router.get('/', async (req, res) => {
    try {
        // This is where the backend actually talks to 127.0.0.1:27017
        const invItems = await User.find({}); 
        res.status(200).json({ success: true, data: invItems });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error" });
        //error 505 displays
    }
});

export default router;