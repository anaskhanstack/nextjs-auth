import type { NextPage } from "next";
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";

import { AuthContext } from "../context/context";

const Home: NextPage = () => {
  const { user } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user]);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <h1>Welcome User</h1>
    </main>
  );
};

export default Home;
