//Chapter - 116

//This file explains how we can type a polymorphic component.

type PolymorphicComponentOwnProps<E extends React.ElementType> = {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary";
  children: React.ReactNode;
  as?: E;
};

type PolymorphicComponentProps<E extends React.ElementType> =
  PolymorphicComponentOwnProps<E> &
    Omit<React.ComponentProps<E>, keyof PolymorphicComponentOwnProps<E>>;

const PolymorphicComponent = <E extends React.ElementType = "div">({
  size,
  color,
  children,
  as,
}: PolymorphicComponentProps<E>) => {
  const Component = as || "div";
  return (
    <Component className={`class-wth-${size}-${color}`}>{children}</Component>
  );
};

export default PolymorphicComponent;
