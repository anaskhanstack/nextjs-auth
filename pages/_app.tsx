import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AuthContextProvider } from "@context/context";
import PrivateRoutes from "@components/PrivateRoutes";

function MyApp({ Component, pageProps }: AppProps) {
  const protectedRoutes: [string] = ["/"];

  return (
    <AuthContextProvider>
      <PrivateRoutes protectedRoutes={protectedRoutes}>
        <Component {...pageProps} />
      </PrivateRoutes>
    </AuthContextProvider>
  );
}

export default MyApp;
