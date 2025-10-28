import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/authContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const onClickhandler = () => {
    console.log("test");
    login();               // ✅ Correct order
    navigate("/dashboard");
  };

  return (
    <div>
      <button onClick={onClickhandler}>go to dashboard</button>
    </div>
  );
};

export default Login;
