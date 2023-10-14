import { selectToken } from "@/app/features/authentication/loginSelector";
import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function RootLayout() {
  const token = useSelector(selectToken);
  return (
    <main className="flex gap-2">
      <Sidebar />
      <div className="flex-grow p-4">
      <Header />
      {token ? <Outlet /> : <Navigate to="/signin" />}
      </div>
      </main>
    

  );
}

export default RootLayout;
