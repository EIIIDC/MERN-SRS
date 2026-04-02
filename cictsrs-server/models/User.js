import mongoose from 'mongoose';

const userSchema =  new mongoose.Schema({
    name: {type: String},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    office: {type: String, required: true},
    role: {type: String, enum:["superadmin", "admin", "client"], default: "client"}
}
)

const User = mongoose.model("User", userSchema);
export default User