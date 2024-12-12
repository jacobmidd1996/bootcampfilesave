// Our Alert function accepts on argument of `props`.
// This will be an object containing all of the props or properties that were passed to this component from the parent.
// We can expect to see "message" and "type" properties inside our "props" object.
// function Alert(props) {
//   console.log(props);

//   return (
//     <div className={`alert alert-${props.type || 'success'}`} role="alert">
//       {props.message} {props.dan}
//     </div>
//   );
// }

function Alert({type, message, dan}) {
  console.log(props);

  return (
    <div className={`alert alert-${type || 'success'}`} role="alert">
      {message} {dan}
    </div>
  );
}

export default Alert;


// Alert({message='Invalid user id or password', type='danger})