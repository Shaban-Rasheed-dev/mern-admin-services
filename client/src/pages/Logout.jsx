import { useEffect } from "react";
import { useAuth } from "../ContextAPI/auth";
import { useNavigate } from "react-router-dom";

export const Logout = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    logOut();
    navigate("/");
  }, [logOut]);
  return <></>;
};
