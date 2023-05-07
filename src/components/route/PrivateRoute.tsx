import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
export function PrivateRouter({ children }) {
  const location = useLocation();
  const { user } = useAuth();
  if (!user?.email_verified) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  if (!user?.profile) {
    return <Navigate to="/completeProfile" replace={true} />;
  }
  return children;
}

export default PrivateRouter;
