//Chapter - 110

export type ProfileProps = {
  name: string;
};

export default function Profile({ name }: ProfileProps) {
  return <div>Profile component: Name is {name}</div>;
}
