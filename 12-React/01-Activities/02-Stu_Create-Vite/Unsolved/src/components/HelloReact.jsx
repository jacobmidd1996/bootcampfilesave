// TODO: Add a comment explaining what a react component is
// is a reusable piece of UI that encapsulates its own structure, style, and behavior
function HelloReact() {
  const text = "some text";

  // TODO: Add a comment explaining what JSX is and the significance of the curly braces
  // JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code
  // within your JavaScript files. It enables you to create React elements in a more readable way.
  // The curly braces `{}` are used in JSX to embed JavaScript expressions within the markup.
  return <h2>Hello World! Here is {text}</h2>;
}

export default HelloReact;
