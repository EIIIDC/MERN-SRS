import "../App.css";
//import bcrypt from 'bcrypt';
//import User from './models/User.js';
//import connectDB from './db/connection.js';

const Register = () => {


    return (


        <div className="flexbox justify-center h-screen"> 

                 <div className="flex flex-col  items-center justify-center h-screen bg-[url(../src/assets/ictLOGO.svg)] bg-cover bg-center bg-no-repeat bg-bgblue/30  bg-blend-overlay  md:bg-contain">
               

                <form className='flex flex-col gap-6  bg-complementaryblue/80 bg-blend-overlay p-4 rounded-lg shadow-md w-full max-w-lg'>
                    <h1 className="text-4xl mt-10 font-bold  text-center">REGISTRATION FORM</h1>


                    <div className='form-group item-center justify-center'>
                        <label  className='block text-lg font-medium '>First Name </label>
                        <input type="text" id='fname' name='fname' className='w-full bg-white/70 border border-white-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500' required/>
                    </div>


                    <div className='form-group item-center justify-center'>
                        <label  className='block text-lg font-medium '>Middle Name </label>
                        <input type="text" id='mname' name='mname' className='w-full bg-white/70 border border-white-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500' required/>
                    </div>

                    <div className='form-group item-center justify-center'>
                        <label  className='block text-lg font-medium '>Last Name </label>
                        <input type="text" id='lname' name='lname' className='w-full bg-white/70 border border-white-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500' required/>
                    </div>

                    <div className='form-group item-center justify-center'>
                        <label  className='block text-lg font-medium '>Name Ext. </label>
                        <input type="text" id='extname' name='extname' className='w-full bg-white/70 border border-white-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500' required/>
                    </div>

                    <div className='form-group item-center justify-center'>
                        <label className='block text-lg font-medium '>Email </label>
                        <input type="text" id='email' name='email' className='w-full bg-white/70 border border-white-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500' required/>
                    </div>

                    <div className='form-group'>
                        <label  className='block text-lg font-medium '>
                            Password
                        </label>
                        <input type='password' id='password' name='password' className='w-full bg-white/70 border border-white-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500' required/>
                    </div>

                     <div className='form-group'>
                        <label  className='block text-lg font-medium mb-1'>
                            Confirm Password
                        </label>
                        <input type='password' id='confirmpassword' name='confirmpassword' className='w-full bg-white/70 border border-white-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500' required/>
                    </div>


                 <button className=' p-3 bg-green-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'><a href=""> Register </a></button>
                   

                </form>
                
            </div>

        </div>

        
    );
/*
const adduser = async() => {

    try(
        const hashPassword = await bcrypt.hash("superadmin",10);
            const newUser = new User({
                name: "superadmin",
                email: "superadmin@gmail.com",
                password: hashPassword,
                office: "CICT",
                role:"superadmin"
            });

        await newUser.save();
        console.log("Superadmin user and CCTV created successfully");
           
    )catch(error) {
        console.log(error);
        }
}

*/

}
export default Register;
