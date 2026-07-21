import express from 'express';
import Cctv from '../models/cctv.js'; 

const router = express.Router();

// GET all CCTVs
router.get('/', async (req, res) => {
    try {
        // This is where the backend actually talks to 127.0.0.1:27017
        const cctvs = await Cctv.find({}); 
        res.status(200).json({ success: true, data: cctvs });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error" });
    }
});

export default router;