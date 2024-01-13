//Chapter - 112

//This file explains how we can specify the typing so that we can restrict the props which can be passed to a component depending
//on other props.

//We apply the restrictions by using the "never" type on the properties.

type NumberType = {
  value: number;
};

type PositiveNumberType = NumberType & {
  isPositive: boolean;
  isNegative?: never;
  isZero?: never;
};

type NegativeNumberType = NumberType & {
  isNegative?: boolean;
  isPositive: never;
  isZero?: never;
};

type ZeroType = NumberType & {
  isZero?: boolean;
  isPositive: never;
  isNegative?: never;
};

type NumberProps = PositiveNumberType | NegativeNumberType | ZeroType;

//By doing the above typing we are making sure that at any given point of time, only one out of these 3 (isPositive, isNegative
//and isZero) props will be allowed to pass to this Number component.

const Number = ({ value, isPositive, isNegative, isZero }: NumberProps) => {
  return (
    <div>
      {value} is {isPositive && "Positive"} {isNegative && "Negative"}{" "}
      {isZero && "Zero"}
    </div>
  );
};

export default Number;
