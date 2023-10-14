import { selectToken } from "@/app/features/authentication/loginSelector";
import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function RootLayout() {
  const token = useSelector(selectToken);
  return (
    <>
      <Header />
      <Sidebar />
      {token ? <Outlet /> : <Navigate to="/signin" />}
    </>
  );
}

export default RootLayout;
