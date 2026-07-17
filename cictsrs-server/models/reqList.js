import mongoose from 'mongoose';

const reqListSchema =  new mongoose.Schema({
    assignedTechnician: {type: String, required: true}, // hatak upon admin assignment, admin select
    name: {type: String,required: true}, //change to connected data from user model
    email: {type: String, required: true}, // hatak sa user model
    office: {type: String, required: true},// hatak sa user model
    device: {type: String, required: true}, // user defined - input
    serialNumber: {type: String, required: true, unique: true},// user defined - input
    issue: {type: String, required: true}, // user defined, admin remarks
    dateReceived: {type: Date, default: Date.now}, //datetime.now() - auto generated, upon user submission
    dateReleased: {type: Date},// datetime.now() - auto generated, upon admin release
    releasedBy: {type: String,required: true}, // hatak upon admin release
    //releasedBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}, -- String type for test, SchemaObject ID is the default for live
    inclusions: {type: String, default: "none"},
    status: {type: String, default: "completed"},
    
})

const reqList = mongoose.model("ReqList", reqListSchema);
export default reqList;