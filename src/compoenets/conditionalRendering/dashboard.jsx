import React from "react";
import { useAuth } from "../../auth/authContext";

const Dashboard = () => {
    const {logout}=useAuth()
  return (
    <div>
      <p>this is dashboard</p>
      <button onClick={logout}>logOut</button>
    </div>
  );
};

export default Dashboard;
