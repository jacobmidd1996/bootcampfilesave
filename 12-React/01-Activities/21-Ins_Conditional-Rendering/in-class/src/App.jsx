import { useState } from 'react';
import Welcome from './components/Welcome';
import AccountDetails from './components/AccountDetails';

function App() {
  // Here we declare a state boolean variable "loggedIn" and a function to update it.
  const [loggedIn, setLoggedIn] = useState(false);

  // We return the Welcome component and pass loggedIn and setLoggedIn as props.
  return (
  <>
    <Welcome loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
    <AccountDetails loggedIn={loggedIn} />
  </>);
}

export default App;
