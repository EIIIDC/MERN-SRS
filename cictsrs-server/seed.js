import bcrypt from 'bcrypt';
import User from './models/User.js';
import Cctv from './models/cctv.js';
import RepairLog from './models/RepairLog.js';
import Inventory from './models/Inventory.js';
import connectDB from './db/connection.js';

const register = async() => {
    try {
            connectDB();
        /*    const hashPassword = await bcrypt.hash("superadmin",10);
            const newUser = new User({
                name: "superadmin",
                email: "superadmin@gmail.com",
                password: hashPassword,
                office: "CICT",
                role:"superadmin"
            });
        */

            
            const newCctv = new Cctv({
                Location: "Main Entrance",
                cctvType: "bullet",
                installationDate: new Date("2023-01-15"),
                lastMaintenanceDate: new Date("2024-01-10"),
                status: "active"
            });
        

            const newRepairLog = new RepairLog({
            name: "client2",
            email: "client2@gmail.com",
            office: "CICT",
            device: "Printer L3250",
            issue: "Ink Pad",
            inclusions: "USB Cable, power adapter",
            status: "in progress"
            });

            const newInventory = new Inventory({ 
            itemType: "laptop", 
            itemModel: "Dell XPS 13",
            serialNumber: "SN123456780",
            description: "A high-end laptop",
            quantity: 10,
            serviceable: true
            });


            // await newUser.save();
            // await newCctv.save();
              await newRepairLog.save();
           // await newInventory.save();
            console.log("Superadmin user and CCTV created successfully");
    } catch(error) {
        console.log(error);
    }
}
register();