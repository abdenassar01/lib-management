import { selectToken } from "@/app/features/authentication/loginSelector";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { logOut } from "@/app/features/authentication/loginSlice";

const Header = () => {
  const token = useSelector(selectToken);
  const dispatch = useDispatch();
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 shadow-md mb-6">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <h1>logo</h1>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {!token ? (
              <li>
                <Link
                  to="/signin"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Login
                </Link>
              </li>
            ) : (
              <li>
                <Button onClick={() => dispatch(logOut())}>Logout</Button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
