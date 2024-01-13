//Chapter - 101, 102, 103

import { useState } from "react";

//This file explains what are the things that we should type when using the useState hook.
//NOTE: For simple useState hooks (For example: the useState hook to set the isLoggedIn peoperty), most of the time we don't have
//to explicitly type the useState hook. Type inference will take care of everything for simple values.
//But for complex values, we have to explicitly type the useState hook (For example: the useState hook to set the user peoperty).

type AuthUser = {
  name: string;
  email: string;
};

const TypinguseStateHook = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<AuthUser | null>(null); //Here by the syntax <AuthUser | null>, we are explicitly telling that
  //the user property can be of type AuthUser or null. Note that, as we are telling here that initially and later point of time,
  //the user property can be null, so we have to handle that case in the code. That's why we have added the null check (?) in the
  //line no 43.

  //const [user, setUser] = useState<AuthUser>({} as AuthUser); //This is another way to type the useState hook. Here we are telling
  //that the type for user property will always be AuthUser. Here the {} as AuthUser syntax is called type assertion. If we do this
  //then we can avoid the null checks that we have done in the line no 43, as we are telling for sure, the user property won't be
  //null in any condition.

  const handleLogin = () => {
    setIsLoggedIn(true);
    setUser({ name: "Anindya", email: "anindyasundarjana3@gmail.com" });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>{isLoggedIn ? "Logged In" : "Logged Out"}</div>
      <div>
        User details: Name: {user?.name} Email: {user?.email}
      </div>
    </div>
  );
};

export default TypinguseStateHook;
