import express from 'express';
import Technician from '../models/Technicians.js';
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const technician = await Technician.find({});
    res.status(200).json({ success: true, data: technician });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
});
router.get('/:id', async (req, res) => {
  try {
    const technician = await Technician.findById(req.params.id);
    if (!technician) {
      return res.status(404).json({ success: false, message: "Technician not found" });
    }
    res.status(200).json({ success: true, data: technician });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { isOccupied } = req.body;

  try {
    const updatedTech = await Technician.findByIdAndUpdate(
      id,
      { isOccupied },
      { new: true },
    );

    if (!updatedTech) {
      return res
        .status(404)
        .json({ success: false, message: "Technician not found" });
    }

    res.status(200).json({ success: true, data: updatedTech });
  } catch (error) {
    console.error("Error updating technician status:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});
export default router;
