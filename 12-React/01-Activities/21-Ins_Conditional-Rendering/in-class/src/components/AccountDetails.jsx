// Here we destructure our props into their own distinct variables
export default function AccountDetails({ loggedIn }) {
  // Lets log our our loggedIn variable to see it change in real time
  console.log('AccountDetails -> loggedIn', loggedIn);

  // If we are loggedIn render one set of elements, and if not we render another
  return (
    <div className="text-center justify-content-center align-items-center mt-4">
      {/* Conditional (ternary) operator is checking to see if loggedIn is true. If so render the following: */}
      {loggedIn ? (
        <div className="bg-secondary text-light mx-4">
        <h1>Welcome, Account Holder!</h1>
        <h2>Holdings:</h2>
        <ul className="list-group">
          <li>22 ETH</li>
          <li>2 BTC</li>
          <li>$100,000</li>
        </ul>
        </div>
      ) : (
        // If we are logged out, render this:
          <div className="bg-warning mx-4">
            <h3>Sign in to view account details.</h3>
          </div>
      )}
    </div>
  );
}
