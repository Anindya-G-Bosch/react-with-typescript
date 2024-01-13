//Chapter - 96

//This file explains how to type an array prop.

// type PersonListProps = {
//   names: {
//     fname: string;
//     lname: string;
//   }[];
// };

import { PersonListProps } from "./Person.types";

const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.names.map((name) => {
        return (
          <h2 key={name.fname}>
            {name.fname} {name.lname}
          </h2>
        );
      })}
    </div>
  );
};

export default PersonList;
