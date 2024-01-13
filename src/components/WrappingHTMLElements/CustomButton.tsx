//Chapter - 114

//This file explains how we can wrap a HTML element and type the props.

type ButtonProps = {
  varient: "primary" | "secondary";
  children: string;
} & Omit<React.ComponentProps<"button">, "children">; //The "Omit" keyword tells that the children prop should only be of string type.

const CustomButton = ({ varient, children, name, ...rest }: ButtonProps) => {
  return (
    <button className={`class-with-${varient}`} {...rest}>
      {children}
    </button>
  );
};

export default CustomButton;
