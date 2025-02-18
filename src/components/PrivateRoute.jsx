import { Navigate } from "react-router-dom";
import { useMyContext } from "./AuthContext";

const PrivateRoute = ({ children }) => {
    const { authState } = useMyContext();
    console.log('islogged in : ',JSON.stringify(authState.isLoggedIn))
    if (!authState.isLoggedIn) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  export default PrivateRoute;