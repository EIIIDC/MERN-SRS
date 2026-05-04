import "../App.css";

const Register = () => {
    return (
        <div className="flexbox justify-center h-screen"> 

                 <div className="flex flex-col  items-center justify-center h-screen bg-[url(../src/assets/ictLOGO.svg)] bg-cover bg-center bg-no-repeat bg-bgblue/30  bg-blend-overlay  md:bg-contain">
               

                <form className='flex flex-col gap-6 bg-complementaryblue/80 bg-blend-overlay p-4 rounded-lg shadow-md w-full max-w-lg'>
                    <h1 className="text-2xl font-bold mb-1 text-center">REGISTRATION FORM</h1>


                    <div className='form-group item-center justify-center'>
                        <label for='email' className='block text-lg font-medium mb-1'>First Name </label>
                        <input type="text" id='email' name='email' className='w-full bg-white/70 border border-white-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500' required/>
                    </div>


                    <div className='form-group item-center justify-center'>
                        <label for='email' className='block text-lg font-medium mb-1'>Middle Name </label>
                        <input type="text" id='email' name='email' className='w-full bg-white/70 border border-white-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500' required/>
                    </div>

                    <div className='form-group item-center justify-center'>
                        <label for='email' className='block text-lg font-medium mb-1'>Last Name </label>
                        <input type="text" id='email' name='email' className='w-full bg-white/70 border border-white-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500' required/>
                    </div>

                    <div className='form-group item-center justify-center'>
                        <label for='email' className='block text-lg font-medium mb-1'>Name Ext. </label>
                        <input type="text" id='email' name='email' className='w-full bg-white/70 border border-white-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500' required/>
                    </div>

                    <div className='form-group item-center justify-center'>
                        <label for='email' className='block text-lg font-medium mb-1'>Email </label>
                        <input type="text" id='email' name='email' className='w-full bg-white/70 border border-white-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500' required/>
                    </div>

                    <div className='form-group'>
                        <label for='password' className='block text-lg font-medium mb-1'>
                            Password
                        </label>
                        <input type='password' id='password' name='password' className='w-full bg-white/70 border border-white-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500' required/>
                    </div>

                     <div className='form-group'>
                        <label for='password' className='block text-lg font-medium mb-1'>
                            Confirm Password
                        </label>
                        <input type='password' id='password' name='password' className='w-full bg-white/70 border border-white-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500' required/>
                    </div>



                    <button className='p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'><a href=""> Register </a></button>

                </form>
            </div>

        </div>
    );
}
export default Register;