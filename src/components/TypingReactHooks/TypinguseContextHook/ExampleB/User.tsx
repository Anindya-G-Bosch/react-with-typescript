//Chapter - 107

import { useContext } from "react";
import { UserContext } from "./UserContextProvider";

const User = () => {
  const userContext = useContext(UserContext);
  const handleLogin = () => {
    userContext.setUser({ name: "John", email: "John.Doe@example.com" });
  };
  const handleLogout = () => {
    userContext.setUser(null);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>Username is: {userContext.user?.name}</div>
      <div>Email is: {userContext.user?.email}</div>
    </div>
  );
};

export default User;
