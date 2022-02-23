import type { NextPage } from "next";
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from "universal-cookie";
import Avatar from "react-avatar";

import { IoIosLogOut } from "react-icons/io";
import { AuthContext } from "../context/context";

const Home: NextPage = () => {
  const { user, onLogout }: any = useContext(AuthContext);
  const cookies = new Cookies();
  const router = useRouter();

  useEffect(() => {
    const session = cookies.get("user");

    if (!session?.id) {
      router.push("/login");
    }
  }, [user, router]);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="flex-1 flex flex-col ">
        <nav className="px-4 flex justify-between  h-16 border-b-2 bg-gradient-to-r from-blue-500 to-blue-300">
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
        </nav>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1>Welcome {user?.username}</h1>
      </div>
    </div>
  );
};

export default Home;
