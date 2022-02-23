import type { NextPage } from "next";
import { useContext } from "react";
import Avatar from "react-avatar";
import { formatDate } from "@utils/index";
import { IoIosLogOut } from "react-icons/io";

import { Container, Navbar, Nav } from "@styles/dashboard.styles.tw";
import { AuthContext, IAuthContext } from "@context/context";

const Home: NextPage = () => {
  const { user, onLogout } = useContext<IAuthContext>(AuthContext);

  return (
    <>
      <Navbar>
        <Nav>
          <ul className="flex items-center">
            <li className="h-6 w-6 text-white">Dashboard</li>
          </ul>

          <ul className="flex items-center">
            <IoIosLogOut
              onClick={onLogout}
              type="button"
              size={30}
              color="white"
              className="m-4 cursor-pointer	"
            />
            <li className="h-10 w-10">
              <Avatar name={user?.username} size="40px" round />
            </li>
          </ul>
        </Nav>
      </Navbar>
      <Container>
        <div className="flex flex-col min-h-screen  items-center justify-center">
          <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
            <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
              {user?.username}
            </h5>
            <p className="text-gray-700 text-base mb-4">Email: {user?.email}</p>
            <p className="text-gray-700 text-base mb-4">
              DOB: {formatDate(user?.dob)}
            </p>

            <button
              type="button"
              className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              View full profile
            </button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
