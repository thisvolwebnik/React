import {useState} from "react";
import {Counter} from "./components/Counter";

function App() {
  const [value, setValue] = useState("");

  return (
    <>
      <Counter/>
      <h2>{value}</h2>
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </>
  )
}

export default App
