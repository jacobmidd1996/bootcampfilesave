import { useContext } from 'react';

// We import the AuthContext so we can use the isLoggedIn state and the login and logout functions.
import { AuthContext } from './AuthContext';
import H1Message from './H1Message';

export default function LoginButtonAndAction(props) {
  const { isLoggedIn, login, logout } = useContext(AuthContext);
  console.log(`LoginButtonAndAction rendering at ${Date()}`);

  // Render a button to log in or out based on the isLoggedIn state
  return (
    <div className="message-button-container">
      {isLoggedIn
        ? (
          <>
            <H1Message>Welcome back!</H1Message>
            <button onClick={logout}>Logout</button>
          </>
        )
        : (
          <>
            <H1Message>Please log in to continue.</H1Message>
            <button onClick={login}>Login</button>
          </>
        )
      }
    </div>
  );

}