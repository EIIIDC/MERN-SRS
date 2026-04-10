import { use, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Root = () => {
    const {user} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            if (user.role === "superadmin") {
                navigate("/superadmin/dashboard");
            } else if (user.role === "admin") {
                navigate("/admin/dashboard");
            } else if (user.role === "client") {
                navigate("/client/dashboard");
            } else {
                navigate("/login");
            }
        } else {
            navigate("/login");
        }
    }, [user, navigate]);

    return null; 
}