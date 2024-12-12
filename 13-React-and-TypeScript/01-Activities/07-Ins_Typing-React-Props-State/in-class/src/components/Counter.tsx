import { useState } from 'react';

interface CounterState {
  count: number;
  increment: number;
}

export default function Counter() {
  const [countState, setCountState] = useState<CounterState>({ count: 0, increment: 6 });

  const handleClick = () => {
    // setCountState((prev) => ({ count: prev.count + prev.increment, increment: prev.increment }));
    setCountState({ count: countState.count + countState.increment, increment: countState.increment });
  };
  
  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">Click Increment Button!</div>
      <div className="card-body">
        <p className="card-text">Click Count: {countState.count}</p>
        <button className="btn btn-primary" type="button" onClick={handleClick}>
          Increment
        </button>
      </div>
    </div>
  );
}
