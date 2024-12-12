import './App.css';
import { useState } from 'react';

import CountHeader from './components/CountHeader';
import CountTitle from './components/CountTitle';
import CountDisplay from './components/CountDisplay';

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* ReactElementProps children (React.ReactElement) */}
      <CountHeader>
        <h1>Hi</h1>
      </CountHeader>





      <CountDisplay> {/*Takes ReactNodeProps children (React.ReactNode) */}
        <h3>And...?</h3>
        <h3>And...?</h3>
        <h3>And...?</h3>
        <CountTitle />
        <CountTitle />
        {count}
      </CountDisplay>


      <button style={{margin: "5px"}} onClick={() => setCount(count + 1)}>Increment</button>
      <button style={{margin: "5px"}} onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  )
}
