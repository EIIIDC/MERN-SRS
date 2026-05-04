import '../App.css';

 

const Login = () => {
    return (
        
            <div className="flex flex-col  items-center justify-center h-screen bg-[url(../src/assets/ictLOGO.svg)] bg-cover bg-center bg-no-repeat bg-bgblue/30  bg-blend-overlay  md:bg-contain">
               

                <form className='flex flex-col gap-6 bg-complementaryblue/80 bg-blend-overlay p-4 rounded-lg shadow-md w-full max-w-sm'>
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

                    <button type='submit' className='p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'>LOG IN</button>
                    
                    
                </form>
                    <br/>
                <div className='flex flex-col gap-1 bg-complementaryblue/80 bg-blend-overlay p-2 rounded-lg shadow-md w-full max-w-sm'>
                    <h1 className='block text-md font-medium text-center'>Don't have an account?</h1>
                    <button type='submit' className='p-1 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 mt-0'>Register</button>

                </div>
                    
            </div>

    );

}

export default Login;