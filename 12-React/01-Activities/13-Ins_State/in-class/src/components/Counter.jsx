// First we import `useState` with React so that we can take advantage of the hook
import { useState } from 'react';

export default function Counter() {
  // To set a state variable using `useState`, we give our variable a name of `count`.
  // We also set the name of the function that will update `count`. We called it `setCount`.
  // useState accepts only one argument - the initial value of the state variable.
  const [count, setCount] = useState(0);
  console.log("after calling useState, count is " + count);

  // This is a handler that we will reference in our `onClick` attribute later
  const handleClick = () => {
    let xyz = count;
    console.log("before setCount, count is " + xyz);
    setCount((xyz + 1));
    console.log("after setCount, count is " + xyz);

    // localStorage.setItem("countState", count  + 1);
  };

  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">Click Counter!</div>
      <div className="card-body">
        <p className="card-text">Click Count: {count}</p>
        {/* In our button element, we add a onClick event that invokes our handleClick method */}
        <button className="btn btn-primary" type="button" onClick={handleClick}>
          Increment
        </button>
      </div>
    </div>
  );
}
