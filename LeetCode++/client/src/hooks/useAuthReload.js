import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { removeUser, setUser } from "../features/auth/authSlice";

const useAuthReload = () => {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            setLoading(false);
            return;
        }

        const handleReload = async () => {
            try {
                const response = await axios.get(
                    "http://127.0.0.1:5500/api/auth/profile/",
                    {
                        headers: {
                            Authorization: `${token}`,
                        },
                    }
                );

                dispatch(
                    setUser({
                        _id: response.data.user._id,
                        token: response.data.token,
                        username: response.data.user.username,
                        email: response.data.user.email,
                        role: response.data.user.role,
                        profileImg: response.data.user.profileImg,
                    })
                );

                localStorage.setItem("token", response.data.token);
            } catch (error) {
                localStorage.removeItem("token");
                dispatch(removeUser());
            } finally {
                setLoading(false);
            }
        };

        handleReload();
    }, [dispatch]);

    return loading;
};

export default useAuthReload;