import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AuthContextProvider } from "../context/context";

const initial = {
  user: null,
  login: () => {},
  logout: () => {},
  authReady: false,
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}

export default MyApp;
