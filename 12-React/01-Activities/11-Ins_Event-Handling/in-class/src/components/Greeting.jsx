// The props variable is an object containing the welcomeClass helper method on the clickHandler property
// this is a single line comment
/*
block comments
take up 
multiple
l
i
n
e
s
*/

// to call a function, give it parameters 
//   welcomeStudent()
// to "pass" a function, do not give it parameters
//   welcomeStudent

function Greeting(props) {
  const welcomeStudent = function() {
    alert(`Welcome, Johnboy!`)
  }
  // here is a valid comment because this is...
  //   JUST JAVASCRIPT
  return (
    <div className="container text-center">
      <div className="list-group">
        {/* In React, we can directly attach event listeners to the to the relevant markup */}
        <button 
          onClick={props.doThisWhenItGetsClicked} 
          className="list-group-item list-group-item-action list-group-item-info" 
          aria-current="true"
        >
          Greet the Students!
        </button>
        <button 
          onClick={welcomeStudent} 
          className="list-group-item list-group-item-action"
        >
          John
        </button>
      </div>
    </div>
  );
}

export default Greeting;
