// We import the AuthContext so we can use the isLoggedIn state and the login and logout functions.
import LoginButtonAndAction from './components/LoginButtonAndAction';

function App() {
  console.log("App rendering at " + Date());
  // The useContext hook gets us the isLoggedIn state and the functions that work with it.
  // Render a button to log in or out based on the isLoggedIn state
  return (
    <div className="app light">
      <p>Welcome to The App</p>
      <LoginButtonAndAction />
    </div>
  );
}

export default App;
