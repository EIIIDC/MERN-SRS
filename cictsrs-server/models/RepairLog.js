import mongoose from 'mongoose';

const repairLogSchema =  new mongoose.Schema({
   reqID: {
      type: String,
      required: true,
      unique: true,
    },
    name: {type: String,required: true},
    email: {type: String, required: true},
    office: {type: String, required: true},
    device: {type: String, required: true},
    serialNumber: {type: String, required: true, unique: true},
    issue: {type: String, required: true},
    dateReceived: {type: Date, default: Date.now},
    dateReleased: {type: String,default: "Pending"},
    releasedBy: {type: String,required: true},
    //releasedBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}, -- String type for test, SchemaObject ID is the default for live
    inclusions: {type: String, default: "none"},
    status: {type: String, enum:["received", "in progress", "completed"], default: "received"},
    assignedTechnician: {type: String,enum:["Jaspher", "Mico", "Ian","Jayson","Raymund","Vhan", "TO BE ASSIGNED",""], default: "TO BE ASSIGNED", allowNull: true},
},
{
    timestamps: true, 
  }
)

const RepairLog = mongoose.model("RepairLog", repairLogSchema);
export default RepairLog;