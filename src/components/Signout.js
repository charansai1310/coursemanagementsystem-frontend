import React, { useContext } from "react";
import { AuthContext, authData } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function SignOut(){
    const [authState, setAuthState] = useContext(AuthContext);
    const navigate = useNavigate();

    const handleButtonClick = () => {
        localStorage.removeItem('token')
        setAuthState(authData)
        navigate('/')
    }
    return(
        <div>
            <button onClick={handleButtonClick}>
                Sign Out
            </button>
        </div>
    )
}