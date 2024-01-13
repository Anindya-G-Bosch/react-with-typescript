import "./App.css";
// import Greet from "./components/TypingProps/Greet";
// import Person from "./components/TypingProps/Person";
// import PersonList from "./components/TypingProps/PersonList";
// import Status from "./components/TypingProps/Status";
// import Heading from "./components/TypingProps/Heading";
// import Oscar from "./components/TypingProps/Oscar";
// import Button from "./components/TypingProps/Button";
// import Input from "./components/TypingProps/Input";
// import Container from "./components/TypingProps/Container";
// import TypinguseStateHook from "./components/TypingReactHooks/TypinguseStateHook";
// import TypinguseReducerHook from "./components/TypingReactHooks/TypinguseReducerHook";
// import Box from "./components/TypingReactHooks/TypinguseContextHook/ExampleA/Box";
// import ThemeContextProvider from "./components/TypingReactHooks/TypinguseContextHook/ExampleA/ThemeContextProvider";
// import User from "./components/TypingReactHooks/TypinguseContextHook/ExampleB/User";
// import UserContextProvider from "./components/TypingReactHooks/TypinguseContextHook/ExampleB/UserContextProvider";
// import DomRef from "./components/TypingReactHooks/TypinguseRefHook/DomRef";
// import MutableRef from "./components/TypingReactHooks/TypinguseRefHook/MutableRef";
// import TypingClassComponent from "./components/TypingClassComponents/TypingClassComponent";
// import Private from "./components/TypingComponentProp/Private";
// import Profile from "./components/TypingComponentProp/Profile";
// import List from "./components/GenericProps/List";
// import Number from "./components/RestrictingPropsByTyping/Number";
// import Toast from "./components/TypingUsingTemplateLiterals/Toast";
// import CustomButton from "./components/WrappingHTMLElements/CustomButton";
// import ExtractingProps from "./components/ExtractingPropsFromComponents/ExtractingProps";
import PolymorphicComponent from "./components/TypingPolymorphicComponents/PolymorphicComponent";

function App() {
  // const personName = {
  //   fname: "Bruce",
  //   lname: "Wayne",
  // };

  // const nameList = [
  //   {
  //     fname: "Bruce",
  //     lname: "wayne",
  //   },
  //   {
  //     fname: "Clark",
  //     lname: "Kent",
  //   },
  //   {
  //     fname: "Barry",
  //     lname: "Alen",
  //   },
  // ];

  return (
    <div className="App">
      {/* <Greet name={"Anindya"} messageCount={10} isLoggedIn={true} /> */}

      {/* <Person name={personName} /> */}

      {/* <PersonList names={nameList} /> */}

      {/* <Status status="loading" /> */}

      {/* <Heading>Text passed as children to Heading Component</Heading> */}
      {/* <Oscar>
        <Heading>Oscar goes to Leonardo Decaprio!</Heading>
      </Oscar> */}

      {/* <Button
        handleClick={(event, id) => {
          console.log("Button clicked", event, id);
        }}
      />
      <Input value="Anindya" handleChange={(event) => console.log(event)} /> */}

      {/* <Container styles={{ border: "1px solid black", padding: "1rem" }} /> */}

      {/* <TypinguseStateHook /> */}

      {/* <TypinguseReducerHook /> */}

      {/* <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}

      {/* <UserContextProvider>
        <User />
      </UserContextProvider> */}

      {/* <DomRef />
      <MutableRef /> */}

      {/* <TypingClassComponent message="The count is: " /> */}

      {/* <Private isLoggedIn={true} component={Profile} /> */}

      {/* <List
        items={["Batman", "Superman", "Wonder Woman"]}
        // items={[1, 2, 3, 4]}
        handleClick={(event) => {
          console.log(event);
        }}
      /> */}

      {/* <Number value={10} isPositive /> */}

      {/* <Toast position="center" /> */}

      {/* <CustomButton varient="primary" onClick={() => console.log("Clicked")}>
        Primary Button
      </CustomButton> */}

      {/* <ExtractingProps name="Ironman" isLoggedIn={true} /> */}

      <PolymorphicComponent as="h1" size="lg">
        Heading
      </PolymorphicComponent>
      <PolymorphicComponent as="p" size="md">
        Paragraph
      </PolymorphicComponent>
      <PolymorphicComponent
        as="label"
        htmlFor="someId"
        size="sm"
        color="secondary"
      >
        Label
      </PolymorphicComponent>
    </div>
  );
}

export default App;
