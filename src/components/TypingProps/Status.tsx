//Chapter - 97

type StatusProps = {
  status: "loading" | "success" | "error"; //Here we are using an union of string literals to specify the type of status prop.
  //By doing this we will make sure that status does not accept any other string value rather than these 3.
};

const Status = (props: StatusProps) => {
  let message;
  if (props.status === "loading") {
    message = "Loading...";
  } else if (props.status === "success") {
    message = "Data fetched successfully!";
  } else if (props.status === "error") {
    message = "Error fetching data.";
  }
  return (
    <div>
      <h2>Status: {message}</h2>
    </div>
  );
};

export default Status;
