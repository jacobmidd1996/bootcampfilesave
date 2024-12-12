import { useState, useEffect } from 'react';

export default function Display() {
  const [count, setCount] = useState(0);

  // When the component mounts to the VDOM, run this callback
  useEffect(() => {
    const storedCount = localStorage.getItem('myCount');
    console.log("useEffect has run function 1");

    // If the value is found in storage, convert the string to a number and update state
    if (storedCount) {
      setCount(
        parseInt(storedCount)
      )
    }
  }, [count])

  // When the state changes run this callback
  useEffect(() => {
    // Update the localStorage count variable using the setItem method
    console.log("useEffect has run function 2");
    localStorage.setItem('myCount', count);
  });

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const clearStorage = () => {
    localStorage.clear();
    setCount(0);
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <code>check localStorage in developer console</code>
      <hr />
      <button type="button" onClick={handleIncrease}>
        Click Me
      </button>
      <button type="button" onClick={clearStorage}>
        Reset Count
      </button>
    </div>
  );
}
