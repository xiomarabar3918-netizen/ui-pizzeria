import { Navigate } from "react-router-dom";

interface Props {
  isAuthenticated: boolean;
  children: JSX.Element;
}

export const ProtectedRoute = ({ isAuthenticated, children }: Props) => {
  return isAuthenticated ? children : <Navigate to="/login" />;
};
