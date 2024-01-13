//Chapter - 95

//This file explains how to type the props in react.

//Use types when building applications and use interfaces when building libraries.

//Here we can see typing for a string, a number and a boolean prop.

type GreetProps = {
  name: string;
  messageCount?: number; //This question mark denotes that the messageCount property is optional. So when invoking the Greet
  //component, we don't need to necessarily pass this property.
  isLoggedIn: boolean;
};
const Greet = (props: GreetProps) => {
  const { messageCount = 0 } = props; //This line says that, if messageCount property is passed then use that value otherwise use 0 as
  //the value for this property.
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `Welcome ${props.name}. You have ${messageCount} unread messages.`
          : "Welcome Guest"}
      </h2>
    </div>
  );
};

export default Greet;
