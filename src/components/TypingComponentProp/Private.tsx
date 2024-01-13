//Chapter - 110

//This file explains how to type a component prop.

import Login from "./Login";
import { ProfileProps } from "./Profile";

type PrivateProps = {
  isLoggedIn: boolean;
  component: React.ComponentType<ProfileProps>; //Here we have to pass the ProfileProps type with in the angular brackets as this
  //will tell that, the component prop accepts prop of type ProfileProps. For example, the component prop is accepting a prop
  //'name' which is of type ProfileProps at line no 16.
};
const Private = ({ isLoggedIn, component: Component }: PrivateProps) => {
  if (isLoggedIn) {
    return <Component name="Anindya" />;
  } else {
    return <Login />;
  }
};

export default Private;
