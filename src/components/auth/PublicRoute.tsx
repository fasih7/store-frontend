import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

interface PublicRouteProps {
  children: JSX.Element;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) return <Navigate to="/" />;

  return children;
};

export default PublicRoute;
