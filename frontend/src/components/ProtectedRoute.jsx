import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getCurrentUserToken } from "../auth/getCurrentUser";
import Loading from "./Loading";

function ProtectedRoute() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      const result = await getCurrentUserToken();
      setIsLoggedIn(result.isLoggedIn);
    };

    checkAuth();
  }, []);

  if (isLoggedIn === null) {
    return <Loading />;
  }

  return isLoggedIn ? <Outlet /> : <Navigate to="/" replace />;
}

export default ProtectedRoute;