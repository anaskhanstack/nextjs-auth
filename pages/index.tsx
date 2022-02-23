import type { NextPage } from "next";
import { useContext } from "react";
import Avatar from "react-avatar";

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
          <h1>
            Welcome {user?.username}, <strong>{user?.email}</strong>
          </h1>
        </div>
      </Container>
    </>
  );
};

export default Home;
