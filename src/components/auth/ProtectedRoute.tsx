import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

interface ProtectedRouteProps {
  children: JSX.Element;
  // allowedRoles: ("admin" | "staff")[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  // allowedRoles,
}) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/signup" />;
  }
  // else if (!allowedRoles.includes(userRole!)) {
  //     return (
  //     <>
  //       <div className="error-page-container">
  //        <h1> Error 404 -- Page Not Found </h1>
  //       </div>
  //     </>
  //   );
  // }
  return children;
};

export default ProtectedRoute;
