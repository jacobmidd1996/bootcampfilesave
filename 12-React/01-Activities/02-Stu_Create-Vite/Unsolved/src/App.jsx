// TODO: Add a comment explaining what this import statement is doing
// This import statement is bringing in the `HelloReact` component from the `HelloReact.js` file
// located in the `components` directory. By importing it, we can use the `HelloReact` component
// within the current file, allowing us to include its functionality and structure in our application.
// This is part of the modular approach in React, enabling better organization and reusability of code.
import HelloReact from "./components/HelloReact";

// TODO: Add a comment explaining the purpose of the App component
// The `App` component serves as the root component of the application.
// It acts as a container for other components, managing the overall structure
// and layout of the user interface. In this case, the `App` component renders
// the `HelloReact` component, making it part of the application's UI.
// Components like `App` help organize the application into a clear hierarchy,
// facilitating code reuse and maintenance.
function App() {
  return <HelloReact />;
}

export default App;
