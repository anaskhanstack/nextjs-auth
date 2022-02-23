import type { NextPage } from "next";
import { useForm, FormProvider } from "react-hook-form";
import { useRouter } from "next/router";
import { useContext, useState } from "react";

import { AuthContext } from "../../context/context";

import SocialLogin from "../../components/SocialLogin";
import Input from "../../components/Input";
import {
  Container,
  CardContainer,
  Form,
  PrimaryBtn,
  SecondaryBtn,
  SideSection,
} from "../../styles/auth.styles.tw";
import { Error, LineHorizontal } from "../../styles/global.styles.tw";

interface LoginFormData {
  email: string;
  password: string;
}

const Login: NextPage = () => {
  const router = useRouter();
  const { onLogin } = useContext(AuthContext);
  const [msg, setMsg] = useState();

  const methods = useForm<LoginFormData>();
  const {
    formState: { errors },
  }: any = methods;

  const handleClick = (e: any) => {
    e.preventDefault();
    router.push("/signup");
  };

  const onSubmit = async (data: object) => {
    try {
      const isSuccessfull = await onLogin(data);
      if (isSuccessfull?.message) {
        setMsg(isSuccessfull?.message);
      } else {
        router.push("/");
      }
    } catch (e) {}
  };

  return (
    <Container>
      <CardContainer>
        <FormProvider {...methods}>
          <Form onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="font-bold text-left">
              <span className="text-blue-300">Onboarding</span>
            </div>
            <div className="flex flex-col items-center py-10">
              <h2 className="text-3xl font-bold text-blue-300 mb-2">
                Login to Account
              </h2>
              <LineHorizontal blue />
              <SocialLogin />
              <p className="text-gray-400 text-small mb-3">
                or use your email account
              </p>

              <Input
                placeholder="Email"
                type="email"
                name="email"
                error={errors?.email || null}
              />
              {errors?.email && <Error>Please enter your email address.</Error>}
              <Input
                placeholder="Password"
                type="password"
                name="password"
                error={errors?.password || null}
                validate={{
                  minLength: 6,
                  message: "password must be greater then 6 characters",
                }}
              />
              {errors?.password && (
                <Error>
                  The password you provided must have at least 6 characters.
                </Error>
              )}

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
              <PrimaryBtn type="submit">Sign in</PrimaryBtn>
              {msg && <p className="text-xs text-red-500">{msg}</p>}
            </div>
          </Form>
        </FormProvider>
        <SideSection>
          <h2 className="text-3xl font-bold mb-2">Welcome</h2>
          <LineHorizontal />
          <p className="mb-4 text-center">
            Fill up personal information and start journey with us
          </p>
          <p className="mb-2 text-sm">If you don&apos;t have account then</p>
          <SecondaryBtn onClick={handleClick}>Sign Up</SecondaryBtn>
        </SideSection>
      </CardContainer>
    </Container>
  );
};

export default Login;
