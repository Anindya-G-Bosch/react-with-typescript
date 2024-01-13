//Chapter - 111

//This file explains how we can specify generic type for props.

//The generic typing is really powerful because ->
//1. It helps in avoiding code duplication when we need multiple types to be handled.
//2. It also provides strict type checking.

type ListProps<T> = {
  items: T[];
  handleClick: (value: T) => void;
};

const List = <T extends string | number>({
  items,
  handleClick,
}: ListProps<T>) => {
  //Here we can mention what are the types that
  //the items array may have and create a union of those types like string | number | etc ...
  //The "T" stands for "Type". This is a standard practice to write T while applying generic typing, though you can use any other
  //text in the place of "T".
  return (
    <div>
      <h2>List of items:</h2>
      {items.map((item, index) => {
        return (
          <div key={index} onClick={() => handleClick(item)}>
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default List;
