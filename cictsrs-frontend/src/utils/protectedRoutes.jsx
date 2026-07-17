import {useEffect} from "react";
import { useAuth } from "../context/AuthContext";
import {useNavigate} from "react-router";




const protectedRoutes = ({children, requireRole}) => {
    const {user} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate("/unauthorized");
        } 
        if (!requireRole.includes(user.role)) {
            navigate("/unauthorized");
            return;
        }
        }, [user, navigate, requireRole]);

        if (!user) return null; 
        if (!requireRole.includes(user.role)) return null;

        return children;
};

export default protectedRoutes;