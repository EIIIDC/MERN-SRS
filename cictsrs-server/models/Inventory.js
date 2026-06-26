import mongoose from "mongoose";

const inventorySchema = new mongoose.Schema({
    itemType: {type: String, enum: ["laptop", "desktop", "printer", "monitor", "other"], required: true},
    itemModel: {type: String, required: true},
    serialNumber: {type: String, required: true},
    description: {type: String},
    quantity: {type: Number},
    serviceable: {type: Boolean, default: false, required: true},
    lastChecked: {type: Date, default: Date.now},
    // Image must be stored via URL or path to image
})

const Inventory = mongoose.model("Inventory", inventorySchema);
export default Inventory;