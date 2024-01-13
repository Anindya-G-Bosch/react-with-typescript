//Chapter - 115

//This file explains how we can extract prop types from a component.

import Greet from "../TypingProps/Greet";

const ExtractingProps = (props: React.ComponentProps<typeof Greet>) => {
  //Here, the props will have the same props properties as Greet component.

  return <div>{props.name}</div>;
};

export default ExtractingProps;
