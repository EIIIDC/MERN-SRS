import mongoose, { SchemaTypes } from "mongoose";

const technicianSchema = new mongoose.Schema({
    Fname: {type: String, required: true},
    Lname: {type: String, required: true},
    isOccupied: {type: Boolean, default: false},  
    Emtype:{type: String, enum:["Job Order", "Permanent"],default: "Technician"}, 
}
)

const Technician = mongoose.model("Technician", technicianSchema);
export default Technician;

