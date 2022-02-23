import type { NextPage } from "next";
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import Avatar from "react-avatar";

import { AuthContext } from "../context/context";

const Home: NextPage = () => {
  const { user }: any = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user]);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="flex-1 flex flex-col ">
        <nav className="px-4 flex justify-between  h-16 border-b-2 bg-gradient-to-r from-blue-500 to-blue-300">
          <ul className="flex items-center">
            <li className="h-6 w-6 text-white">Dashboard</li>
          </ul>

          <ul className="flex items-center">
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
