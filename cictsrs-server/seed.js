import bcrypt from 'bcrypt';
import User from './models/User.js';
import Cctv from './models/cctv.js';
import RepairLog from './models/RepairLog.js';
import Inventory from './models/Inventory.js';
import connectDB from './db/connection.js';
import reqList from './models/reqList.js';

const register = async() => {
    try {
            connectDB();
            const hashPassword = await bcrypt.hash("client123",10);
            const newUser = new User({
                name: "testclient",
                email: "testclient@gmail.com",
                password: hashPassword,
                office: "CICT",
                role:"client"
            });

            const newReqList = new reqList({
                assignedTechnician: "technician1",
                name: "client2",
                email: "sample@mail.com",
                office: "CICT",
                device: "Printer L3250",
                serialNumber: "SN987654321",
                issue: "Ink Pad",
                dateReceived: new Date("2024-06-01"),
                dateReleased: new Date("2024-06-05"),
                releasedBy: "technician1",
                inclusions: "USB Cable, power adapter",
                status: "in progress"
                
                });    

            
            const newCctv = new Cctv({
                CctvId: "69",
                Location: "Kalinga Food Court",
                cctvType: "ANPR",
                installationDate: new Date("2099-01-15"),
                lastMaintenanceDate: new Date("2420-01-10"),
                Status: "out of order",
               
            });
        

            const newRepairLog = new RepairLog({
            name: "client2",
            email: "client2@gmail.com",
            office: "CICT",
            device: "Printer L3250",
            serialNumber: "SN987654321",
            issue: "Ink Pad",
            dateReceived: new Date("2024-06-01"),
            dateReleased: new Date("2024-06-05"),
            releasedBy: "technician1",
            inclusions: "USB Cable, power adapter",
            status: "in progress",
            assignedTechnician: "technician1"
            });

            const newInventory = new Inventory({ 
            itemType: "laptop", 
            itemModel: "Dell XPS 13",
            serialNumber: "SN123456780",
            description: "A high-end laptop",
            quantity: 10,
            serviceable: true
            });


            // await newReqList.save();
             await newCctv.save();
            //  await newRepairLog.save();
           // await newInventory.save();
            console.log("Request List seeded successfully!");
    } catch(error) {
        console.log(error);
    }
}
register();