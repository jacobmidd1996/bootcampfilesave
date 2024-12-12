
function JSXVariables(props) {
  let name = props.name;
  const num1 = 1;
  const num2 = 2;

  return (
    <div className="main-container">
      <div className="container">
        <div className="p-5 mb-4 bg-light">
          {/* JavaScript expressions can be escaped inside of curly braces */}

          <h2>My cat's name is {name}. But you can call me...</h2>
          <h1>The JSX Boss!</h1>
          <hr />
          <h2>I can do math: {num1 + num2}.</h2>
          <h2>
            I can generate random numbers:
            {Math.floor(Math.random() * 10) + 1},
            {Math.floor(Math.random() * 10) + 1},
            {Math.floor(Math.random() * 10) + 1}.
          </h2>
          <h2>I can even reverse my cat's name: {name.split('').reverse()}</h2>
          <h3>My cat's name has {name.length} letters</h3>
          <h4>My cat's name, which is {name}, are you happy Maher... is {name.split('').reverse().join('') === name ? " :) " : "NOT"} a palindrome</h4>
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;
