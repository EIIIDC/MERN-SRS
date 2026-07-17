import mongoose from 'mongoose';

const userSchema =  new mongoose.Schema({
    name: {type: String},
    // middle name and last name  
    email: {type: String, required: true, unique: true},
    //need verifier; API is an option, or manual pero less secure 
    password: {type: String, required: true},
    //filters neededd + standard 
    office: {type: String, required: true},
    //must change type to enum, but too many options; pwede siguro acronym nalang  tas text
    role: {type: String, enum:["superadmin", "admin", "client"], default: "client"}
    
    
}
)

const User = mongoose.model("User", userSchema);
export default User