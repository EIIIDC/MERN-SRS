import express from 'express';
import Cctv from '../models/cctv.js'; 

const router = express.Router();


router.get('/', async (req, res) => {
    try {
      
        const cctvs = await Cctv.find({}); 
        res.status(200).json({ success: true, data: cctvs });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error" });
    }
});

export default router;