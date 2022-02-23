import { useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Cookies from "universal-cookie";

import { AuthContext } from "@context/context";

interface PrivateRoute {
  protectedRoutes: [string];
  children: any;
}

export default function PrivateRoute({
  protectedRoutes,
  children,
}: PrivateRoute) {
  const router = useRouter();
  const cookies = new Cookies();
  const session = cookies.get("user");

  const { user } = useContext(AuthContext);

  const pathIsProtected = protectedRoutes.indexOf(router.pathname) !== -1;
  const authCheck = ["/login", "/signup"];

  useEffect(() => {
    if (!session && pathIsProtected) {
      router.push("/login");
    } else if (authCheck.includes(router.pathname) && session) {
      router.push("/");
    }
  }, [user, pathIsProtected]);

  return children;
}
