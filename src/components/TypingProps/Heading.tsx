//Chapter - 96

//This file explains how we can type the children prop.

type HeadingProps = {
  children: string;
};
const Heading = (props: HeadingProps) => {
  return <div>{props.children}</div>;
};

export default Heading;
