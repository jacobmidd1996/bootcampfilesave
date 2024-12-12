// TODO: Integrate the Advertisement component into the App component below. Create two instances of the component.

import "./App.css";
import Calculator from "./components/Calculator";
import Advertisement from "./components/Advertisement";

function App() {
  return (
    <>
      <Advertisement
        companyName="wayne tech"
        productDescription="tech"
        price={3}
      />
      <Advertisement
        companyName="queen tech"
        productDescription="arrows"
        price={5}
      />
      <Calculator />
    </>
  );
}

export default App;
