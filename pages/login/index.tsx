import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useForm, FormProvider } from "react-hook-form";

import Input from "../../components/Input";
import SocialLogin from "../../components/SocialLogin";

interface LoginFormData {
  email: string;
  password: string;
}

const Login: NextPage = () => {
  const router = useRouter();
  const methods = useForm<LoginFormData>();

  const handleClick = (e: any) => {
    e.preventDefault();
    router.push("/signup");
  };

  const onSubmit = (data: object) => console.log(data);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <div className="bg-white rounded-2xl shadow-2xl flex w-2/3  max-w-4xl">
        <div className="w-4/5 p-5 flex flex-col">
          <div className="font-bold text-left">
            <span className="text-blue-300">Onboarding</span>
          </div>
          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit(onSubmit)}
              className="flex flex-col items-center py-10"
            >
              <h2 className="text-3xl font-bold text-blue-300 mb-2">
                Login to Account
              </h2>
              <SocialLogin />
              <p className="text-gray-400 text-small mb-3">
                or use your email account
              </p>

              <Input placeholder="Email" type="email" name="email" />
              <Input placeholder="Password" type="password" name="password" />

              <div className="flex justify-around mt-2 w-full">
                <div className="flex items-center space-x-2 ">
                  <input type={"checkbox"} name="remember" />
                  <label htmlFor="remember" className="text-gray-400 text-sm">
                    Remember me
                  </label>
                </div>
                <div>
                  <p className="text-gray-400 text-sm"> Forget Password?</p>
                </div>
              </div>
              <button
                type="submit"
                className="bg-blue-300 text-white rounded-full px-12 py-2 my-2"
              >
                Sign in
              </button>
            </form>
          </FormProvider>
        </div>
        <div className="bg-blue-300 flex flex-col items-center text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
          <h2 className="text-3xl font-bold mb-2">Welcome</h2>

          <p className="mb-4 text-center">
            Fill up personal information and start journey with us
          </p>
          <p className="mb-2">If you don't have account then</p>
          <button
            onClick={handleClick}
            className="border-2 border-white rounded-full px-12 py-2"
          >
            Sign Up
          </button>
        </div>
      </div>
    </main>
  );
};

export default Login;
