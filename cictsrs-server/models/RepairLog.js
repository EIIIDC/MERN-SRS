import mongoose from 'mongoose';

const repairLogSchema =  new mongoose.Schema({
    name: {type: String,required: true},
    email: {type: String, required: true},
    office: {type: String, required: true},
    device: {type: String, required: true},
//serialNumber: {type: String, required: true, unique: true},
    issue: {type: String, required: true},
    dateReceived: {type: Date, default: Date.now},
    dateReleased: {type: Date},
 //releasedBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    inclusions: {type: String, enum: ["", "no"], default: "no"},
    status: {type: String, enum:["pending", "in progress", "completed"], default: "pending"},
 // assignedTo: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
})

const RepairLog = mongoose.model("RepairLog", repairLogSchema);
export default RepairLog;