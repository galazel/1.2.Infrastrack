import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getCurrentUserToken } from "../auth/getCurrentUser";
import Loading from "./Loading";

function RoleRoute({ allowedGroup }) {
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const checkRole = async () => {
      const result = await getCurrentUserToken();

      setAuthorized(
        result.isLoggedIn &&
        result.groups?.includes(allowedGroup)
      );

      setLoading(false);
    };

    checkRole();
  }, [allowedGroup]);

  if (loading) {
    return <Loading />;
  }

  return authorized ? <Outlet /> : <Navigate to="/" replace />;
}

export default RoleRoute;