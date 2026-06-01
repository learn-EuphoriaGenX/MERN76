import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

let ProtectedRoute = ({ children, allowedRoles = [] }) => {

    let { token, role } = useSelector((data) => data.auth)
    if (!token) {
        toast.error("You must be logged in to access this page")
        return <Navigate to="/sign-in" replace />
    }
    if (allowedRoles && allowedRoles.length > 0) {
        if (!allowedRoles.includes(role)) {
            toast.error("You are not authorized to access this page")
            return <Navigate to="/" replace />
        }
    }
    return children
}

export default ProtectedRoute;
