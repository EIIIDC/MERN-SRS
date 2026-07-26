import express from 'express';
import Inventory from '../models/Inventory.js'; 

const router = express.Router();


router.get('/', async (req, res) => {
    try {
   
        const invItems = await Inventory.find({}); 
        res.status(200).json({ success: true, data: invItems });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error" });

    }
});

export default router;