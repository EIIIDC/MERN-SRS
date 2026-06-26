import mongoose from "mongoose";

const cctvSchema = new mongoose.Schema({
CctvId: {type: String, required: true, unique: true},
Location: {type: String, required: true},
cctvType: {type: String, enum: [ "bullet", "ptz", "ANPR","others"], required: true},
InstallationDate: {type: Date, default: Date.now},
LastMaintenanceDate: {type: Date, default: Date.now},
Status: {type: String, enum:["operational", "needs maintenance", "out of order"], default: "operational"},
})

const Cctv = mongoose.model("CCTV", cctvSchema);
export default Cctv;