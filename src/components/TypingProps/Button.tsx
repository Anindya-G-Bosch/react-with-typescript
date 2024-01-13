//Chapter - 98

//This file explains how to type the event props (Event handlers which we pass as a prop to a component).

type ButtonProps = {
  //handleClick: () => void; //We define the type like this when the even handler does not need any parameter and does not return
  //anything. For example take this scenario -> "We can make an API call in the function body but does not have to accept a
  //parameter or return a value."

  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void; //This is another varient of event handler where you need to passed the event into your event
  //handler. Here we need to type the event as well.
};
const Button = (props: ButtonProps) => {
  return (
    <div>
      <button onClick={(event) => props.handleClick(event, 1)}>Click Me</button>
    </div>
  );
};

export default Button;
