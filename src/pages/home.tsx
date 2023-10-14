import { selectToken } from "@/app/features/authentication/loginSelector";
import { useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

function Home() {
  const token = useSelector(selectToken);
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (!token) {
      navigate("/signin");
    } else {
      navigate("/protectes");
    }
  }, [token]);

  return (
    <main className="h-screen flex flex-col place-content-center">
      <h1 className="font-bold">Lib App</h1>
      <Outlet />
    </main>
  );
}

export default Home;
