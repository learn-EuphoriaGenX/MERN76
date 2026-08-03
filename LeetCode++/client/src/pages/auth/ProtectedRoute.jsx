import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "../Loading";
import toast from "react-hot-toast";

const ProtectedRoute = ({
    children,
    loading,
    allowedRoles = [],
}) => {

    const user = useSelector((state) => state.auth);

    if (loading) {
        return (
            <Loading />
        );
    }

    if (!user?.token) {
        toast.error("Please login first")
        return <Navigate to="/sign-in" replace />;
    }

    if (
        allowedRoles.length > 0 &&
        !allowedRoles.includes(user.role)
    ) {
        toast.error("You are not authorized to access this page")
        return <Navigate to="/" replace />;
    }

    return children;
};

export default ProtectedRoute;