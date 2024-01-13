//Chapter - 98

//This file explains how to type the event props (Event handlers which we pass as a prop to a component).

type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
const Input = (props: InputProps) => {
  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => { //It does not matter if we pass the event handler as
  // //a prop or define it with in the component, the typing of the event arguments remain the same.
  //   console.log(event);
  // };

  return (
    <input type="text" value={props.value} onChange={props.handleChange} />
    // <input type="text" value={props.value} onChange={handleChange} />
  );
};

export default Input;
