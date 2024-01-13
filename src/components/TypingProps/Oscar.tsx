//Chapter - 96

//This file explains how to type the children prop when a react component is passed as a children.

type OscarProps = {
  children: React.ReactNode;
};
const Oscar = (props: OscarProps) => {
  return <div>{props.children}</div>;
};

export default Oscar;
