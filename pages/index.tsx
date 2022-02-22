import type { NextPage } from "next";
import { useContext } from "react";
import { AuthContext } from "../context/context";
import Cookies from 'universal-cookie';

const Home: NextPage = () => {
  const user = useContext(AuthContext);
  const cookies = new Cookies();

  console.log(user,cookies.get("user"), "This is the user");
  
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <h1>Welcome User</h1>
    </main>
  );
};

export default Home;
