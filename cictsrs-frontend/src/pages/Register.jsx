import "../App.css";
import bcrypt from "bcryptjs";
import { useNavigate } from "react-router";
import { useState } from "react";

const Register = () => {
    const API_BASE_URL = `https://cict-srs-server.onrender.com`; {/*transfer to ENV*/}

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    {/*POST*/}

    {/*     
      Name
      email
      password - bcrypt
      office
      role
        */}

    const navigate = useNavigate(); 
    {/*navigate to login*/}
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
    try {
        const response = await axios.post(
        `${API_BASE_URL}/api/users`,
        { name, office, email, password }
      );

      if (
        response.data.status === true ||
        response.data.success === true ||
        response.data.succes === true
      ) {
        await login(response.data.user, response.data.token);
        
        
        toast.success("Account Registered Successfully!");

        if (response.data.user.role === "superadmin") {
          navigate("/");
      
            } 
        else {
            toast.error(
            response.data.error ||
            response.data.message ||
            "Registration failed. Please try again."
            );}}
      
    } catch (error) {
      
      if (error.response) {
        toast.error(error.response.data.message || "An error occurred during login.");
      } else {
        toast.error("Network error. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  }
  
  
  {/*front*/}
  return (
    <div className="flexbox justify-center h-screen">
      <div className="flex flex-col  items-center justify-center h-screen bg-[url(../src/assets/ictLOGO.svg)] bg-cover bg-center bg-no-repeat bg-bgblue/30  bg-blend-overlay  md:bg-contain">
        
        
        
        <form className="flex flex-col gap-6  bg-complementaryblue/80 bg-blend-overlay p-4 rounded-lg shadow-md w-full max-w-lg">
          <div className="form-group item-center justify-center">
            <label className="block text-lg font-medium ">Name</label>
            <input
              type="text"
              id="fname"
              name="fname"
              className="w-full bg-white/70 border border-white-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="form-group item-center justify-center">
            <label className="block text-lg font-medium ">Office</label>
            <input
              type="text"
              id="extname"
              name="extname"
              className="w-full bg-white/70 border border-white-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="form-group item-center justify-center">
            <label className="block text-lg font-medium ">Email </label>
            <input
              type="text"
              id="email"
              name="email"
              className="w-full bg-white/70 border border-white-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="form-group">
            <label className="block text-lg font-medium ">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full bg-white/70 border border-white-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="form-group">
            <label className="block text-lg font-medium mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmpassword"
              name="confirmpassword"
              className="w-full bg-white/70 border border-white-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button className=" p-3 bg-blue-600 text-white rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <a href=""> Register </a>
          </button>
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
};
export default Register;
