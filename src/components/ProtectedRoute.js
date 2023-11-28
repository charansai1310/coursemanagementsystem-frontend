import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export const ProtectedRoute = ({ children }) => {
  const [authState, setAuthState] = useContext(AuthContext)
  if(!authState.isLoggedIn){
    return <Navigate to="/login" />
  }
  if (authState.userData == null) {
    // user is not authenticated
    return <Navigate to="/login" />
  }
  return children;
};