//Chapter - 100

//This file explains that how we can define the types in a sepatate file and export that to use in other files.

export type Name = {
  fname: string;
  lname: string;
};

export type PersonListProps = {
  names: Name[];
};
