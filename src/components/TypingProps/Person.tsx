//Chapter - 96

//Here we can see how to type an object prop.

type PersonProps = {
  name: {
    fname: string;
    lname: string;
  };
};
const Person = (props: PersonProps) => {
  return (
    <div>
      {props.name.fname} {props.name.lname}
    </div>
  );
};

export default Person;
