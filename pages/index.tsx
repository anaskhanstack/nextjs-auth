import type { NextPage } from "next";
import { useRouter } from "next/router";

import Input from "../components/Input";
import SocialLogin from "../components/SocialLogin";

const Home: NextPage = () => {
  const router = useRouter();

  const handleClick = (e: any) => {
    e.preventDefault();
    router.push("/signup");
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <h1>Welcome User</h1>
    </main>
  );
};

export default Home;
