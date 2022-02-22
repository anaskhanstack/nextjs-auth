import type { NextPage } from "next";
import { useContext } from "react";

import { useForm, FormProvider } from "react-hook-form";
import { useRouter } from "next/router";

import SocialLogin from "../../components/SocialLogin";
import { AuthContext } from "../../context/context";
import Input from "../../components/Input";

interface LoginFormData {
  username: string;
  email: string;
  password: string;
}
const Signup: NextPage = () => {
  const router = useRouter();
  const { onRegister } = useContext(AuthContext);

  const methods = useForm<LoginFormData>();

  const handleClick = (e: any) => {
    e.preventDefault();
    router.push("/login");
  };

  const onSubmit = async (data: object) => {
    const isSuccessfull = await onRegister(data);
    if (isSuccessfull) {
      router.push("/");
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <div className="bg-white rounded-2xl shadow-2xl flex w-2/3  max-w-4xl">
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="w-4/5 p-5 flex flex-col"
          >
            <div className="font-bold text-left">
              <span className="text-blue-300">Onboarding</span>
            </div>
            <div className="flex flex-col items-center py-10">
              <h2 className="text-3xl font-bold text-blue-300 mb-2">
                Register your Account
              </h2>
              <div className="border-2 border-blue-300 w-1/5 mb-2"></div>
              <SocialLogin />
              <p className="text-gray-400 text-small mb-3">
                or use your email account
              </p>

              <Input placeholder="Name" type="name" name="username" />
              <Input placeholder="Email" type="email" name="email" />
              <Input placeholder="Password" type="password" name="password" />

              <button className="bg-blue-300 text-white rounded-full px-12 py-2 my-2">
                Sign Up
              </button>
            </div>
          </form>
        </FormProvider>
        <div
          className={`bg-gradient-to-r from-blue-400 to-blue-300 flex flex-col items-center text-white rounded-tr-2xl rounded-br-2xl py-36 px-12`}
        >
          <h2 className="text-3xl font-bold mb-2">Welcome!</h2>

          <div className="border-2 border-white w-1/5 mb-2"></div>
          <p className="mb-4 text-center">
            Fill up personal information and start journey with us
          </p>
          <p className="mb-4 text-sm">If already have account then</p>
          <button
            onClick={handleClick}
            className="border-2 border-white rounded-full px-12 py-2"
          >
            Sign In
          </button>
        </div>
      </div>
    </main>
  );
};

export default Signup;
