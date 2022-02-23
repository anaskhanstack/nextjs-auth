import { useContext, useState } from "react";

import { useForm, FormProvider } from "react-hook-form";

import { useRouter } from "next/router";
import type { NextPage } from "next";

import SocialLogin from "@components/SocialLogin";
import DatePicker from "@components/DatePicker";
import { AuthContext } from "@context/context";
import Input from "@components/Input";

import { Error, LineHorizontal, Title } from "@styles/global.styles.tw";
import {
  Container,
  CardContainer,
  Form,
  PrimaryBtn,
  SecondaryBtn,
  SideSection,
} from "@styles/auth.styles.tw";

interface LoginFormData {
  username: string;
  email: string;
  password: string;
  dob?: Date;
}

const Signup: NextPage = () => {
  const router = useRouter();
  const { onRegister } = useContext(AuthContext);
  const [msg, setMsg] = useState<string>();

  const methods = useForm<LoginFormData>();
  const {
    formState: { errors },
  }: any = methods;

  const handleClick = (e: any) => {
    e.preventDefault();
    router.push("/login");
  };

  const onSubmit = async (data: object) => {
    const isSuccessfull = await onRegister(data);
    console.log(isSuccessfull, "This is success");
    if (isSuccessfull?.message) {
      setMsg(isSuccessfull?.message);
    } else {
      console.log("i am in");
      router.push("/");
    }
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
              <Title primary>Register your Account</Title>
              <LineHorizontal blue />
              <SocialLogin />
              <p className="text-gray-400 text-small mb-3">
                or use your email account
              </p>

              <Input
                placeholder="Name"
                type="name"
                name="username"
                error={errors?.username || null}
              />
              {errors?.username && <Error>Please enter username.</Error>}
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

              <DatePicker error={errors?.dob || null} />
              {errors?.dob && <Error>Please Enter Date of Birth</Error>}

              <PrimaryBtn type="submit">Sign Up</PrimaryBtn>
              {msg && <p className="text-xs text-red-500">{msg}</p>}
            </div>
          </Form>
        </FormProvider>
        <SideSection>
          <Title>Welcome!</Title>

          <LineHorizontal />

          <p className="mb-4 text-center">
            Fill up personal information and start journey with us
          </p>
          <p className="mb-4 text-sm">If already have account then</p>
          <SecondaryBtn onClick={handleClick}>Sign In</SecondaryBtn>
        </SideSection>
      </CardContainer>
    </Container>
  );
};

export default Signup;
