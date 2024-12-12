import { useState } from "react";
import CardBody from "./CardBody";

// TODO: Add a comment explaining what export default does
// allows you to export a single value from a file without needing destructuring
export default function Counter() {
  // TODO: Add a comment that explains how the useState hook works
  // adds a state to a functional component, returns a 2 eleement array,takes singal parameter as initial value
  const [count, setCount] = useState(0);

  // TODO: Explain what is happening with this click handler
  // number will increaqse by one when button is clicked, calls setcount from use state hook causes components function to rerun
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // TODO: Explain what is happening with this click handler
  // this will make it go down by one
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">Click Counter!</div>
      {
        /* TODO: Add a comment that explains what props are getting passed to CardBody */
        // count, handleincrement, handledecrement
      }
      <CardBody
        count={count}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
    </div>
  );
}
