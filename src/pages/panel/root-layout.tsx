import { selectToken } from "@/app/features/authentication/loginSelector";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function RootLayout() {
  const token = useSelector(selectToken);
  return <>{token ? <Outlet /> : <Navigate to="/signin" />}</>;
}

export default RootLayout;
