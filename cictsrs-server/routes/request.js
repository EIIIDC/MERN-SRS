import express from 'express';
import RepairLog from '../models/RepairLog.js'; 

const router = express.Router();

// GET all inventory items
router.get('/', async (req, res) => {
    try {
     
        const RepairLogs = await RepairLog.find({}); 
        res.status(200).json({ success: true, data: RepairLogs });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error" });
        
    }
});

router.post('/', async (req, res) => {
    try {
        

        const FormData = new RepairLog(req.body);
        const savedLog = await FormData.save();

        res.status(201).json({ success: true, data: FormData });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});
router.get('/:id', async (req, res) => {
    try {
        const updatedLog = await RepairLog.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            { new: true } 
        );
        res.status(200).json(updatedLog);
    } catch (error) {
        res.status(500).json({ message: "Error updating log" });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedLog = await RepairLog.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            { new: true } 
        );
        res.status(200).json(updatedLog);
    } catch (error) {
        res.status(500).json({ message: "Error updating log" });
    }
});

export default router;