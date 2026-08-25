import bcrypt from 'bcrypt';
import User from './models/User.js';
import Cctv from './models/cctv.js';
import RepairLog from './models/RepairLog.js';
import Inventory from './models/Inventory.js';
import connectDB from './db/connection.js';
import reqList from './models/reqList.js';
import Technicians from './models/Technicians.js';

const register = async() => {
    try {
            connectDB();
            const hashPassword = await bcrypt.hash("admin123",10);
            const newUser = new User({
                name: "testclient",
                email: "admin@gmail.com",
                password: hashPassword,
                office: "CICT",
                role:"superadmin"
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
            reqID:"seed",
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
            itemType: "printer", 
            itemModel: "secret",
            serialNumber: "SN123456780",
            description: "3d Printer",
            quantity: 10,
            serviceable: false
            });

            const newtechnician = new Technicians({ 
            Fname: "Vhan",
            Lname: "Villoria",
            isOccupied: false,
            Emtype: "Permanent"
              
            });
            const newtechnician1 = new Technicians({ 
            Fname: "Raymund",
            Lname: "Balbin Jr.",
            isOccupied: false,
            Emtype: "Permanent"
              
            });

             const newtechnician2 = new Technicians({ 
            Fname: "Ian",
            Lname: "Talanay",
            isOccupied: false,
            Emtype: "Permanent"
              
            });
          
           

            await newUser.save();
        //     await newReqList.save();
       //     await newCctv.save();
       //       await newRepairLog.save();
        //    await newInventory.save();
        //      await newtechnician.save();
         //     await newtechnician1.save();
            console.log("seeded successfully!");
    } catch(error) {
        console.log(error);
    }
}
register();