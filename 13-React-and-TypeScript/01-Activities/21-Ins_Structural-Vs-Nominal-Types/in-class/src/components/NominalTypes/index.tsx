import { useState } from 'react';
import './style.css';
//A nominal typing system treats each type as its own unique type, even if all the properties are the same. TypeScript does not support nominal typing by default, but we can mock this functionality using intersection types and brand properties.
type Username = string & { __brand: "username" };
function NominalTypes() {
  const [fullName, setFullName] = useState<string>('');
  // Here, we ensure `username` can only be set to either an empty string or Username type.
  const [username, setUsername] = useState<Username | ''>('');
  //This function will take in a plain string and output a Username type while replacing all spaces with underscores.
  const validateUsername = (inputName: string): Username => {
    const validUsername = inputName.replace(/ /g, '_');
    //We use a type assertion here so that TypeScript will add the `__usernameBrand` to our string
    // This is the whole big idea. Force the developer to say something
    // is this new, special type. This is the only way we can return
    // a Username - by marking the return value with "as Username"
    // No other rules are actually enforced (no spaces, etc)
    return validUsername as Username;
  };
  return (
    <div className='NominalTypes'>
      <h2>Nominal Types</h2>
      <form>
        <label htmlFor='nominalName'>Full Name</label>
        <input
          id='nominalName'
          type='text'
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <label htmlFor='nominalUsername'>Username</label>
        <input
          id='nominalUsername'
          type='text'
          value={username}
          //This will throw a typeScript error, because we cannot set username to a plain string
          // onChange={(e) => setUsername(e.target.value)}
          //Instead, we must first run the user input through our custom validation function
          onChange={(e) => setUsername(validateUsername(e.target.value))}
        />
      </form>
    </div>
  );
}

export default NominalTypes;
